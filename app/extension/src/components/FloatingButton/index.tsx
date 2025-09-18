import React from "react";
import { IURyenneLogo } from "../Icon";

const FloatingButton = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className="tw:absolute tw:bottom-4 tw:-left-12 tw:bg-neutral-900 tw:rounded-l-full tw:shadow-sm tw:text-sm tw:hover:bg-neutral-800 tw:transition-all tw:cursor-pointer tw:px-3 tw:py-2 tw:pr-6 tw:font-medium tw:hover:-translate-x-3 tw:text-white tw:[&_svg]:size-6"
      {...props}
    >
      <IURyenneLogo />
    </div>
  );
};

export default FloatingButton;
