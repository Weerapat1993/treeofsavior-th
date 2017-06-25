import React from 'react'
import TitleDisplay from '../TitleDisplay'

export const Loading = ({ isLoading, children }) => (
  <div>
    {
      isLoading ? <TitleDisplay title='กำลังดาวน์โหลดข้อมูล...' /> : children
    }
  </div>
)

export default Loading