import { useParams } from "react-router-dom"
const data = {
  velopert: {
    name: '김민준',
    age: 22
  },
  gildong: {
    name: '홍길동',
    age: 20
  }
}

const Profile = () => {
  const params = useParams()
  console.log(params) // {username: 'velopert'}
  const profile = data[params.username]
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.age}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다</p>
      )}
    </div>
  )
}

export default Profile