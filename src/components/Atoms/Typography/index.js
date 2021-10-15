import { variantStyles } from './style'

const Typography = ({ tag = 'p', variant = 'default', children, ...props }) => {
  const variantComponent = variantStyles[variant]
  const WithComponent = variantComponent.withComponent(tag)

  return (
    <WithComponent {...props}>
      {children}
    </WithComponent>
  )
}

export default Typography
