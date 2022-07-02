const config = {
  USER: "${{ secrets.USER }}",
  PASSWORD: "${{ secrets.PASSWORD }}",
  DB: "${{ secrets.DB }}",
  HOST: "${{ secrets.HOST }}"
}

module.exports = config