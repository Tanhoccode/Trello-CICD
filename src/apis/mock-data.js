export const mockData = {
  board: {
    _id: 'board-id-01',
    title: 'Ng Minh Tan Stack Board',
    description: 'Pro MERN stack Course',
    type: 'public/Private WorkSpace', // 'private'
    ownerIds: [], // Những users là Admin của board
    memberIds: [], // Những users là member bình thường của board
    columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03', 'column-id-04'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    columns: [
      {
        _id: 'column-id-01',
        boardId: 'board-id-01',
        title: 'FREELENCER',
        cardOrderIds: ['card-id-05', 'card-id-02', 'card-id-03', 'card-id-04', 'card-id-01', 'card-id-06', 'card-id-07'],
        cards: [
          {
            _id: 'card-id-01',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Work from home',
            description: 'Markdown Syntax ',
            cover: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            memberIds: ['test-user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          { _id: 'card-id-02', boardId: 'board-id-01', columnId: 'column-id-02', title: 'NOTE  ', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-04', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Job Description', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          {
            _id: 'card-id-05',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'KPIs',
            description: 'Markdown Syntax ',
            cover: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            memberIds: ['test-user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          
        ]
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-01',
        title: 'OWN PLEASURE',
        cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
        cards: [
          {
            _id: 'card-id-08',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Travel, Health & Wellness',
            description: 'Markdown Syntax ',
            cover: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            memberIds: ['test-user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          {
            _id: 'card-id-09',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Heal the soul',
            description: 'Markdown Syntax ',
            cover: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            memberIds: ['test-user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          { _id: 'card-id-10', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Preparing for the vaction', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-01',
        title: 'TO DO LIST',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13','card-id-13'],
        cards: [
          {
            _id: 'card-id-11',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Meeting',
            description: 'Markdown Syntax ',
            cover: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            memberIds: ['test-user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          {
            _id: 'card-id-12',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Complete my task',
            description: 'Markdown Syntax ',
            cover: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            memberIds: ['test-user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
          {
            _id: 'card-id-13',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Need to health',
            description: 'Markdown Syntax ',
            cover: 'https://images.unsplash.com/photo-1540496905036-5937c10647cc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            memberIds: ['test-user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          }
        ]
      },
      {
        _id: 'column-id-04',
        boardId: 'board-id-0123',
        title: 'FAMILY',
        cardOrderIds: ['column-id-04-placeholder-card'],
        cards: [
          {
            _id: 'card-id-0123',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Time for family',
            description: 'Markdown Syntax ',
            cover: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D',
            memberIds: ['test-user-id-01'],
            comments: ['test comment 01', 'test comment 02'],
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
          },
        ]
      },
      
      
    ]
  }
}