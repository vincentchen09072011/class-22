interface ButtonProps {
    onClick: () => void
    text: string
    color?: string
}
function Button(data: ButtonProps) {
    return <button style={{
        backgroundColor: data.color,
      }}onClick={data.onClick}>{data.text}</button>
  
}
export {Button}