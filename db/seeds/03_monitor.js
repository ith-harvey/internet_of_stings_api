
exports.seed = function(knex, Promise) {
  return knex('humiture').del()
    .then(function () {
      return knex('humiture').insert([
      {"id":104,"temperature":"25.0","humidity":"44.0","date_recorded":"2017-06-28 06:46:04.585165"},
      {"id":105,"temperature":"25.0","humidity":"43.0","date_recorded":"2017-06-28 06:48:00.132043", user_id: 2},
      {"id":106,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 06:48:01.256333", user_id: 1},
      {"id":107,"temperature":"25.0","humidity":"44.0","date_recorded":"2017-06-28 06:50:00.496912", user_id: 1},
      {"id":108,"temperature":"24.0","humidity":"44.0","date_recorded":"2017-06-28 06:50:01.771801", user_id: 1},
      {"id":109,"temperature":"24.0","humidity":"44.0","date_recorded":"2017-06-28 06:52:01.314215", user_id: 1},
      {"id":110,"temperature":"25.0","humidity":"45.0","date_recorded":"2017-06-28 06:54:00.477722", user_id: 2},
      {"id":111,"temperature":"25.0","humidity":"45.0","date_recorded":"2017-06-28 06:56:01.643115", user_id: 1},
      {"id":112,"temperature":"25.0","humidity":"43.0","date_recorded":"2017-06-28 06:58:00.514860", user_id: 1},
      {"id":113,"temperature":"24.0","humidity":"44.0","date_recorded":"2017-06-28 06:58:01.685988", user_id: 2},
      {"id":114,"temperature":"24.0","humidity":"45.0","date_recorded":"2017-06-28 06:58:02.808554", user_id: 1},
      {"id":115,"temperature":"24.0","humidity":"45.0","date_recorded":"2017-06-28 06:58:03.925189", user_id: 1},
      {"id":116,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:00:00.129553", user_id: 1},
      {"id":117,"temperature":"24.0","humidity":"45.0","date_recorded":"2017-06-28 07:00:01.714062", user_id: 1},
      {"id":118,"temperature":"25.0","humidity":"45.0","date_recorded":"2017-06-28 07:00:02.842767", user_id: 1},
      {"id":119,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:00:03.958825", user_id: 1},
      {"id":120,"temperature":"24.0","humidity":"44.0","date_recorded":"2017-06-28 07:02:00.295061", user_id: 1},
      {"id":121,"temperature":"24.0","humidity":"44.0","date_recorded":"2017-06-28 07:02:01.411873", user_id: 1},
      {"id":122,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:02:03.894487", user_id: 1},
      {"id":123,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:02:04.982032", user_id: 1},
      {"id":124,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:04:00.461864", user_id: 1},
      {"id":125,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:04:01.754363", user_id: 1},
      {"id":126,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:04:02.869371", user_id: 1},
      {"id":127,"temperature":"24.0","humidity":"48.0","date_recorded":"2017-06-28 07:04:04.022463", user_id: 1},
      {"id":128,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:06:00.860232", user_id: 1},
      {"id":129,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:06:01.984777", user_id: 1},
      {"id":130,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:06:03.098248", user_id: 1},
      {"id":131,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:06:04.204619", user_id: 1},
      {"id":132,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:08:02.007405", user_id: 1},
      {"id":133,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:08:03.134678", user_id: 1},
      {"id":134,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:08:04.236397", user_id: 1},
      {"id":135,"temperature":"24.0","humidity":"45.0","date_recorded":"2017-06-28 07:10:02.652222", user_id: 2},
      {"id":136,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:10:03.786380", user_id: 2},
      {"id":137,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:10:04.892829", user_id: 1},
      {"id":138,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:14:00.166964", user_id: 1},
      {"id":139,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:14:01.290953", user_id: 2},
      {"id":140,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:14:04.919343", user_id: 1},
      {"id":141,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:16:04.117700", user_id: 2},
      {"id":142,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:18:00.179471", user_id: 1},
      {"id":143,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:18:03.849744", user_id: 1},
      {"id":144,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:18:04.937716", user_id: 1},
      {"id":145,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:20:00.357362", user_id: 1},
      {"id":146,"temperature":"24.0","humidity":"48.0","date_recorded":"2017-06-28 07:20:01.454166", user_id: 1},
      {"id":147,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:20:02.551571", user_id: 1},
      {"id":148,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:20:03.753659", user_id: 1},
      {"id":149,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:22:00.119101", user_id: 1},
      {"id":150,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:22:01.232351", user_id: 1},
      {"id":151,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:22:02.352877", user_id: 1},
      {"id":152,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:22:03.492402", user_id: 1},
      {"id":153,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:22:04.733890", user_id: 1},
      {"id":154,"temperature":"24.0","humidity":"45.0","date_recorded":"2017-06-28 07:24:01.517537", user_id: 2},
      {"id":155,"temperature":"24.0","humidity":"45.0","date_recorded":"2017-06-28 07:26:01.148875", user_id: 1},
      {"id":156,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:26:02.282465", user_id: 2},
      {"id":157,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:26:03.742160", user_id: 1},
      {"id":158,"temperature":"24.0","humidity":"46.0","date_recorded":"2017-06-28 07:28:00.507435", user_id: 1},
      {"id":159,"temperature":"24.0","humidity":"45.0","date_recorded":"2017-06-28 07:32:02.719662", user_id: 2},
      {"id":160,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:32:03.839505", user_id: 2},
      {"id":161,"temperature":"24.0","humidity":"44.0","date_recorded":"2017-06-28 07:34:00.250806", user_id: 1},
      {"id":162,"temperature":"24.0","humidity":"45.0","date_recorded":"2017-06-28 07:36:02.184011", user_id: 1},
      {"id":163,"temperature":"24.0","humidity":"47.0","date_recorded":"2017-06-28 07:36:03.296233", user_id: 2}
     ])
    })
}