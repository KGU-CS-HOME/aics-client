interface Professor {
  id: number
  name: string
  img?: string
  type: string
  contact: string
  email: string
}

const PROFESSORS: Professor[] = [
  {
    id: 1,
    name: '권기현',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=AQ9z4So89iYtyPOJr3Julw',
    type: '교수',
    contact: '031-249-9666',
    email: 'khkwon@kyonggi.ac.kr',
  },
  {
    id: 2,
    name: '전준철',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=M18XITcvm7MtyPOJr3Julw',
    type: '교수',
    contact: '031-249-9668',
    email: 'jcchun@kyonggi.ac.kr',
  },
  {
    id: 3,
    name: '김인철',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=',
    type: '교수',
    contact: '031-249-9669',
    email: 'kic@kyonggi.ac.kr',
  },
  {
    id: 4,
    name: '김광훈',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=j40yTvrgx0ktyPOJr3Julw',
    type: '교수',
    contact: '031-249-9679',
    email: 'kwang@kyonggi.ac.kr',
  },
  {
    id: 5,
    name: '이은정',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=kJ88Cne1X68tyPOJr3Julw',
    type: '교수',
    contact: '031-249-9671',
    email: 'ejlee@kyonggi.ac.kr',
  },
  {
    id: 6,
    name: '권준희',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=mLbaZTXMcuMtyPOJr3Julw',
    type: '교수',
    contact: '031-249-9675',
    email: 'kwonjh@kyonggi.ac.kr',
  },
  {
    id: 7,
    name: '안진호',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=GKaSCmtblD8tyPOJr3Julw',
    type: '교수',
    contact: '031-249-9674',
    email: 'jhahn@kyonggi.ac.kr',
  },
  {
    id: 8,
    name: '김남기',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=j8xto4FMv4ItyPOJr3Julw',
    type: '교수',
    contact: '031-249-9662',
    email: 'ngkim@kyonggi.ac.kr',
  },
  {
    id: 9,
    name: '김희열',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=hBIB9tP41MMtyPOJr3Julw',
    type: '교수',
    contact: '031-249-9607',
    email: 'heeyoul.kim@kyonggi.ac.kr',
  },
  {
    id: 10,
    name: '이병대',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=tpDMAWRSCektyPOJr3Julw',
    type: '교수',
    contact: '031-249-9676',
    email: 'blee@kgu.ac.kr',
  },
  {
    id: 11,
    name: '배상원',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=7w7lKlDgjbQtyPOJr3Julw',
    type: '교수',
    contact: '031-249-9677',
    email: 'swbae@kgu.ac.kr',
  },
  {
    id: 12,
    name: '정경용',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=96QNvrxAocAtyPOJr3Julw',
    type: '교수',
    contact: '031-249-1382',
    email: 'kychung@kyonggi.ac.kr',
  },
  {
    id: 13,
    name: '김도훈',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=mpaVGc5b/5QtyPOJr3Julw',
    type: '부교수',
    contact: '031-249-1364',
    email: 'karmy01@kyonggi.ac.kr',
  },
  {
    id: 14,
    name: '안준호',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=8ivFr7gENlItyPOJr3Julw',
    type: '부교수',
    contact: '031-249-9731',
    email: 'jha@kyonggi.ac.kr',
  },
  {
    id: 15,
    name: '이재흥',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=o8p/k63GHhAtyPOJr3Julw',
    type: '부교수',
    contact: '031-249-1302',
    email: 'jhlee@kyonggi.ac.kr',
  },
  {
    id: 16,
    name: '임현기',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=AQ/DoMNxSj0tyPOJr3Julw',
    type: '조교수',
    contact: '031-249-1318',
    email: 'hlim20@kyonggi.ac.kr',
  },
  {
    id: 17,
    name: '윤익준',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=',
    type: '조교수',
    contact: '031-249-9642',
    email: 'ijyoon@kyonggi.ac.kr',
  },
  {
    id: 18,
    name: '이한용',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=BmCUK3EvbVstyPOJr3Julw',
    type: '조교수',
    contact: '031-249-9637',
    email: 'caehyl210@kyonggi.ac.kr',
  },
  {
    id: 19,
    name: '나관상',
    img: 'https://kutis.kyonggi.ac.kr/webkutis/TransferImageStreamHJ.do?gyosu_no=frnViOYq0vgtyPOJr3Julw',
    type: '조교수',
    contact: '031-249-1306',
    email: 'ksna001@kyonggi.ac.kr',
  },
] as const

export { type Professor, PROFESSORS }