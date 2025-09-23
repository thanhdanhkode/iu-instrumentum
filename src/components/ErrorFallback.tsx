const ErrorFallback = (props: { error?: Error; reset?: () => void }) => {
  return (
    <div>
      <div>
        <span>Error</span>
        <span>{props.error?.message}</span>
      </div>
    </div>
  )
}

export default ErrorFallback
