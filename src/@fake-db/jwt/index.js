import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import mock from '@/@fake-db/mock'

// 비밀번호 재설정 요청 목록
const passwordResetRequests = [
  {
    id: 1,
    account: 'admin@demo.com',
    fullName: 'John Doe',
    requestedAt: '2026-02-17',
  },
  {
    id: 2,
    account: 'client@demo.com',
    fullName: 'Jane Doe',
    requestedAt: '2026-02-19',
  },
]

// 가입 승인 대기 목록
const pendingRegistrations = [
  {
    id: 1,
    fullName: '홍길동',
    email: 'hong',
    phone: '010-1111-2222',
    password: 'password123',
    requestedAt: '2026-02-15',
  },
  {
    id: 2,
    fullName: '김철수',
    email: 'kim',
    phone: '010-3333-4444',
    password: 'password456',
    requestedAt: '2026-02-18',
  },
]


// TODO: Use jsonwebtoken pkg
// ℹ️ Created from https://jwt.io/ using HS256 algorithm
// ℹ️ We didn't created it programmatically because jsonwebtoken package have issues with esm support. View Issues: https://github.com/auth0/node-jsonwebtoken/issues/655
const userTokens = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MX0.fhc3wykrAnRpcKApKhXiahxaOe8PSHatad31NuIZ0Zg',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mn0.cat2xMrZLn0FwicdGtZNzL7ifDTAKWB0k1RurSWjdnw',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6M30.PGOfMaZA_T9W05vMj5FYXG5d47soSPJD1WuxeUfw4L4',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NH0.d_9aq2tpeA9-qpqO0X4AmW6gU2UpWkXwc04UJYFWiZE',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NX0.ocO77FbjOSU1-JQ_BilEZq2G_M8bCiB10KYqtfkv1ss',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nn0.YgQILRqZy8oefhTZgJJfiEzLmhxQT_Bd2510OvrrwB8',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6N30.KH9RmOWIYv_HONxajg7xBIJXHEUvSdcBygFtS2if8Jk',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OH0.shrp-oMHkVAkiMkv_aIvSx3k6Jk-X7TrH5UeufChz_g',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OX0.9JD1MR3ZkwHzhl4mOHH6lGG8hOVNZqDNH6UkFzjCqSE',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTB9.txWLuN4QT5PqTtgHmlOiNerIu5Do51PpYOiZutkyXYg',
]


// ❗ These two secrets shall be in .env file and not in any other file
// const jwtSecret = 'dd5f3089-40c3-403d-af14-d0c228b05cb4'
const database = [
  {
    id: 1,
    fullName: 'John Doe',
    username: 'johndoe',
    password: 'admin',
    avatar: avatar1,
    email: 'admin@demo.com',
    role: 'admin',
    abilities: [
      {
        action: 'manage',
        subject: 'all',
      },
    ],
  },
  {
    id: 2,
    fullName: 'Jane Doe',
    username: 'janedoe',
    password: 'client',
    avatar: avatar2,
    email: 'client@demo.com',
    role: 'client',
    abilities: [
      { action: 'read', subject: 'Auth' },
      { action: 'manage', subject: 'Member' },
      { action: 'manage', subject: 'Calendar' },
    ],
  },
]

mock.onPost('/auth/login').reply(request => {
  const { email, password } = JSON.parse(request.data)
  let errors = {
    email: ['Something went wrong'],
  }
  const user = database.find(u => u.email === email && u.password === password)
  if (user) {
    try {
      const accessToken = userTokens[user.id]

      // We are duplicating user here
      const userData = { ...user }

      const userOutData = Object.fromEntries(Object.entries(userData)
        .filter(([key, _]) => !(key === 'password' || key === 'abilities')))

      const response = {
        userAbilities: userData.abilities,
        accessToken,
        userData: userOutData,
      }


      //   const accessToken = jwt.sign({ id: user.id }, jwtSecret)
      return [200, response]
    }
    catch (e) {
      errors = { email: [e] }
    }
  }
  else {
    errors = {
      email: ['Email or Password is Invalid'],
    }
  }
  
  return [400, { errors }]
})
mock.onPost('/auth/register').reply(request => {
  const { username, email, password } = JSON.parse(request.data)

  // If not any of data is missing return 400
  if (!(username && email && password))
    return [400]
  const isEmailAlreadyInUse = database.find(user => user.email === email)
  const isUsernameAlreadyInUse = database.find(user => user.username === username)

  const errors = {
    password: !password ? ['Please enter password'] : null,
    email: (() => {
      if (!email)
        return ['Please enter your email.']
      if (isEmailAlreadyInUse)
        return ['This email is already in use.']
      
      return null
    })(),
    username: (() => {
      if (!username)
        return ['Please enter your username.']
      if (isUsernameAlreadyInUse)
        return ['This username is already in use.']
      
      return null
    })(),
  }

  if (!errors.username && !errors.email) {
    // Calculate user id
    const { length } = database
    let lastIndex = 0
    if (length)
      lastIndex = database[length - 1].id
    lastIndex += 1

    const userData = {
      id: lastIndex,
      email,
      password,
      username,
      fullName: '',
      role: 'admin',
      abilities: [
        {
          action: 'manage',
          subject: 'all',
        },
      ],
    }

    console.log('userData :>> ', userData)
    database.push(userData)

    const accessToken = userTokens[userData.id]
    const { password: _, abilities, ...user } = userData

    const response = {
      userData: user,
      accessToken,
      userAbilities: abilities,
    }

    return [200, response]
  }
  
  return [400, { error: errors }]
})

// 계정 목록 조회
mock.onGet('/auth/accounts').reply(() => {
  const accounts = database.map(({ id, fullName, username, email, phone, role, avatar }) =>
    ({ id, fullName, username, email, phone, role, avatar }),
  )

  return [200, { accounts }]
})

// 계정 수정
mock.onPut(/\/auth\/accounts\/\d+/).reply(config => {
  const id = Number(config.url?.split('/').pop())
  const { fullName, phone, email, role, password } = JSON.parse(config.data)
  const user = database.find(u => u.id === id)
  if (!user) return [404, { message: '계정을 찾을 수 없습니다' }]

  if (fullName) user.fullName = fullName
  if (phone !== undefined) user.phone = phone
  if (email) user.email = email
  if (role) {
    user.role = role
    user.abilities = role === 'admin'
      ? [{ action: 'manage', subject: 'all' }]
      : [{ action: 'manage', subject: 'all' }]
  }
  if (password) user.password = password

  return [200, { user: { id: user.id, fullName: user.fullName, email: user.email, role: user.role } }]
})

// 계정 삭제
mock.onDelete(/\/auth\/accounts\/\d+/).reply(config => {
  const id = Number(config.url?.split('/').pop())
  const index = database.findIndex(u => u.id === id)
  if (index > -1) {
    database.splice(index, 1)

    return [200]
  }

  return [404, { message: '계정을 찾을 수 없습니다' }]
})

// 계정 추가
mock.onPost('/auth/accounts').reply(config => {
  const { fullName, phone, email, password, role } = JSON.parse(config.data)
  const isEmailInUse = database.find(u => u.email === email)
  if (isEmailInUse) return [400, { message: '이미 사용 중인 이메일입니다' }]

  const newUser = {
    id: database.length ? Math.max(...database.map(u => u.id)) + 1 : 1,
    fullName,
    phone: phone || '',
    username: email.split('@')[0],
    email,
    password,
    role: role || 'client',
    avatar: '',
    abilities: [{ action: 'manage', subject: 'all' }],
  }

  database.push(newUser)

  return [201, { user: { id: newUser.id, fullName: newUser.fullName, email: newUser.email, role: newUser.role } }]
})

// 가입 신청 제출 (회원가입 페이지에서 호출)
mock.onPost('/auth/pending-registrations').reply(config => {
  const { fullName, email, phone, password, role } = JSON.parse(config.data)
  const isEmailInUse = database.find(u => u.email === email)
  const isPending = pendingRegistrations.find(u => u.email === email)
  if (isEmailInUse || isPending)
    return [400, { message: '이미 사용 중이거나 승인 대기 중인 계정입니다' }]

  const newRequest = {
    id: pendingRegistrations.length ? Math.max(...pendingRegistrations.map(u => u.id)) + 1 : 1,
    fullName,
    email,
    phone: phone || '',
    password,
    role: role || 'client',
    requestedAt: new Date().toISOString().slice(0, 10),
  }

  pendingRegistrations.push(newRequest)

  return [201, { message: '가입 신청이 완료되었습니다. 관리자 승인을 기다려주세요.' }]
})

// 대기 목록 조회
mock.onGet('/auth/pending-registrations').reply(() => {
  return [200, { registrations: pendingRegistrations }]
})

// 승인
mock.onPost(/\/auth\/pending-registrations\/\d+\/approve/).reply(config => {
  const id = Number(config.url?.split('/').slice(-2, -1)[0])
  const index = pendingRegistrations.findIndex(u => u.id === id)
  if (index === -1) return [404, { message: '신청 내역을 찾을 수 없습니다' }]

  const [request] = pendingRegistrations.splice(index, 1)

  const newUser = {
    id: database.length ? Math.max(...database.map(u => u.id)) + 1 : 1,
    fullName: request.fullName,
    username: request.email,
    email: request.email,
    phone: request.phone || '',
    password: request.password,
    role: request.role || 'client',
    avatar: '',
    abilities: request.role === 'admin'
      ? [{ action: 'manage', subject: 'all' }]
      : [{ action: 'read', subject: 'Auth' }, { action: 'manage', subject: 'Member' }, { action: 'manage', subject: 'Calendar' }],
  }

  database.push(newUser)

  return [200, { message: '승인 완료', user: { id: newUser.id, fullName: newUser.fullName, email: newUser.email, role: newUser.role } }]
})

// 거절
mock.onDelete(/\/auth\/pending-registrations\/\d+/).reply(config => {
  const id = Number(config.url?.split('/').pop())
  const index = pendingRegistrations.findIndex(u => u.id === id)
  if (index === -1) return [404, { message: '신청 내역을 찾을 수 없습니다' }]

  pendingRegistrations.splice(index, 1)

  return [200, { message: '거절 완료' }]
})

// 비밀번호 재설정 요청 제출
mock.onPost('/auth/password-reset-requests').reply(config => {
  const { account } = JSON.parse(config.data)
  const user = database.find(u => u.email === account)
  if (!user) return [404, { message: '존재하지 않는 계정입니다' }]

  const already = passwordResetRequests.find(r => r.account === account)
  if (already) return [400, { message: '이미 재설정 요청이 접수되어 있습니다' }]

  passwordResetRequests.push({
    id: passwordResetRequests.length ? Math.max(...passwordResetRequests.map(r => r.id)) + 1 : 1,
    account,
    fullName: user.fullName,
    requestedAt: new Date().toISOString().slice(0, 10),
  })

  return [201, { message: '재설정 요청이 완료되었습니다' }]
})

// 비밀번호 재설정 요청 목록 조회
mock.onGet('/auth/password-reset-requests').reply(() => {
  return [200, { requests: passwordResetRequests }]
})

// 비밀번호 재설정 승인 (새 비밀번호 설정)
mock.onPost(/\/auth\/password-reset-requests\/\d+\/approve/).reply(config => {
  const id = Number(config.url?.split('/').slice(-2, -1)[0])
  const { newPassword } = JSON.parse(config.data)
  const index = passwordResetRequests.findIndex(r => r.id === id)
  if (index === -1) return [404, { message: '요청을 찾을 수 없습니다' }]

  const request = passwordResetRequests[index]
  const user = database.find(u => u.email === request.account)
  if (user) user.password = newPassword

  passwordResetRequests.splice(index, 1)

  return [200, { message: '비밀번호가 재설정되었습니다' }]
})

// 비밀번호 재설정 거절
mock.onDelete(/\/auth\/password-reset-requests\/\d+/).reply(config => {
  const id = Number(config.url?.split('/').pop())
  const index = passwordResetRequests.findIndex(r => r.id === id)
  if (index === -1) return [404, { message: '요청을 찾을 수 없습니다' }]

  passwordResetRequests.splice(index, 1)

  return [200, { message: '거절 완료' }]
})
