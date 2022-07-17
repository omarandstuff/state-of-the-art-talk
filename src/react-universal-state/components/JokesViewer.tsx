import React from 'react'
import TypedJokesViewer from './TypedJokesViewer'

export default function JokesViewer() {
  return (
    <div>
      <h1>Wanna hear some jokes?</h1>
      <div>
        <table>
          <tbody>
            <tr>
              <td style={{ padding: '0px 40px' }}>
                <TypedJokesViewer type="Programming"></TypedJokesViewer>
              </td>
              <td>
                <TypedJokesViewer type="Christmas"></TypedJokesViewer>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
