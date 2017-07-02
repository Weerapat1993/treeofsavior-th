import React from 'react'
import TitleDisplay from '../TitleDisplay'

export const Loading = ({ isLoading, children }) => (
  <div>
    {
      isLoading ? 
        <div className="text-center" style={{ minHeight: 1000 }}>
          <div className="cssload-fond text-center">
            <div className="cssload-container-general">
                <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_1"> </div></div>
                <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_2"> </div></div>
                <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_3"> </div></div>
                <div className="cssload-internal"><div className="cssload-ballcolor cssload-ball_4"> </div></div>
            </div>
          </div>
          <TitleDisplay title='กำลังดาวน์โหลดข้อมูล' />
        </div> : children
    }
  </div>
)

export default Loading