const table_column_titles = [
  ".No",
  "Subject Code",
  "Subject Name",
  "Days",
  "Schedule",
  "Room",
  "Instructor",
  "Enrolled",
]

const table_content = [
  {
    id: 1,
    subjectCode: "PE017IU",
    subjectName: "Scientific Socialism",
    day: "Mon",
    schedule: "4",
    room: "A2.201",
    instructor: "XXX",
  },
  {
    id: 2,
    subjectCode: "PH012IU",
    subjectName: "Physics 4",
    day: "Mon",
    schedule: "4",
    room: "A2.201",
    instructor: "XXX",
  },
  {
    id: 3,
    subjectCode: "MA024IU",
    subjectName: "Differential Equations",
    day: "Mon",
    schedule: "4",
    room: "A2.201",
    instructor: "XXX",
  },
  {
    id: 4,
    subjectCode: "MA026IU",
    subjectName: "Probability and Random Processes",
    day: "Mon",
    schedule: "4",
    room: "A2.201",
    instructor: "XXX",
  },
  {
    id: 5,
    subjectCode: "EE055IU",
    subjectName: "Principles of EE2",
    day: "Mon",
    schedule: "4",
    room: "A2.201",
    instructor: "XXX",
  },
  {
    id: 6,
    subjectCode: "EE056IU",
    subjectName: "Principles of EE2 Laboratory",
    day: "Mon",
    schedule: "4",
    room: "A2.201",
    instructor: "XXX",
  },
  {
    id: 7,
    subjectCode: "EE053IU",
    subjectName: "Digital Logic Design",
    day: "Mon",
    schedule: "4",
    room: "A2.201",
    instructor: "XXX",
  },
]

const render = (asChild: boolean, parent?: Element) => {
  const table = document.createElement("table")
  const thead = document.createElement("thead")
  const tbody = document.createElement("tbody")

  const headTr = document.createElement("tr")
  for (const title of table_column_titles) {
    const td = document.createElement("td")
    td.innerText = title
    headTr.appendChild(td)
  }
  thead.appendChild(headTr)

  table_content.forEach((item, index) => {
    const tr = document.createElement("tr")
    tr.id = `course-${item.id}`
    tr.dataset.courseRegistrationId = String(item.id)
    tr.dataset.courseRegisterValue = [
      item.subjectCode,
      item.subjectName,
      item.day,
      item.schedule,
      item.room,
      item.instructor,
    ].join("|")

    const cell = [
      String(index + 1),
      item.subjectCode,
      item.subjectName,
      item.day,
      item.schedule,
      item.room,
      item.instructor,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item as any).enrolled || "",
    ]

    for (const data of cell) {
      const td = document.createElement("td")
      td.textContent = data
      tr.appendChild(td)
    }

    tbody.appendChild(tr)
  })

  table.append(thead, tbody)

  if (asChild) return table
  else parent?.appendChild(table)
}

const add = () => {
  const courseList = document.querySelectorAll('[id*="TDK"]')[0] as HTMLDivElement

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            ;(node as HTMLElement).style.position = "relative"
            node.addEventListener("mouseenter", (event) => {
              const portalE = document.createElement("div")
              portalE.id = "course-add-portal"
              portalE.innerHTML = `
                  <button type="button">add</button>
                  <span>Click to add this course to auto registration list</span>
                `

              node.appendChild(portalE)
            })

            node.addEventListener("mouseleave", (event) => {
              ;(node as HTMLElement).children[1]?.remove()
            })
          }
        })
      }
    }
  })
  if (courseList) observer.observe(courseList, { childList: true })
}

export interface CourseModule {
  /**
   * Renders the course table.
   * @param asChild
   * @param parent
   */
  render: {
    (asChild: boolean): HTMLElement | void
    (asChild: boolean, parent: Element): HTMLElement | void
  }
  /**
   * Adds a course to the registration list.
   */
  add: () => void
}

export const courseController: CourseModule = { render, add }
