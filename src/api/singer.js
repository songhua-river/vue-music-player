import jsonp from '@/assets/js/jsonp'
import {
  commonParams,
  options
} from './config'

export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options).then(res => {
    const { list } = res.data
    const mapArr = []
    const mapT = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'
    list.forEach(item => {
      const findx = item.Findex
      const Index = mapT.indexOf(findx)
      if (mapArr[Index]) {
        mapArr[Index].push(item)
      } else {
        mapArr[Index] = [item]
      }
    })
    return mapArr.filter((item) => Boolean(item))
  })
}

export function getSingerDetail (singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 80,
    songstatus: 1,
    singermid: singerId // 确定请求歌手详情的参数
  })

  return jsonp(url, data, options)
}
