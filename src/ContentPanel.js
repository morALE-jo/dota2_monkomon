import React from 'react'
import ContentGroup from './ContentGroup'

export default function ContentPanel({ ContentView }) {
    if (ContentView === "Heroes"){
        return (
            <div class="content-panel">
                <h1> { ContentView } </h1>
                <p>This is specific to Heroes</p>
                <ContentGroup GroupType={ContentView}>
                </ContentGroup>
            </div>
        )
    }
    else {
        return (
            <div class="content-panel">
                <h1> { ContentView } </h1>
                <p>Generic else statement</p>
                <ContentGroup GroupType={ContentView}></ContentGroup>
            </div>
        )
    }

}
