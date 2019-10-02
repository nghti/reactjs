import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div className="nfound">
      <div className="mgc--auto text-center pt-20">
        <div className="_404 fs-20">404</div>
        <hr className="hr_404 my--20"/>
        <Link className="btn-404 fs--25 p-4" to="/">
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}
