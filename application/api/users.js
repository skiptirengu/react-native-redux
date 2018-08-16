const fetchUsers = (page = 1, seed = null) => {
  const seedParam = seed ? `&seed=${seed}` : ''
  const pageParam = page ? `&page=${page}` : ''
  return fetch('https://randomuser.me/api/?results=15' + seedParam + pageParam).then((data) => data.json())
}

export default {
  fetchUsers
}
