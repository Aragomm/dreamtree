export default function Home() {
let name='rara'
let age=25
let link="http://google.com"

  return (
    <div>
      <h4 style={{color:'red', fontSize:'30px'}}>꿈나무숲 {age}</h4>
      <p className="title-sub">by dev {name}</p>
      <a href={link}>링크링크</a>
      <div>얍얍</div>
      <div>호롤롤로</div>
    </div>
  )
}
