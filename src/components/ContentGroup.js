import React from 'react'
import HeroList from './HeroList'

export default function ContentGroup(props) {
	if (props.GroupType === "Heroes"){
		return (
			<>
				<HeroList></HeroList>
			</>
		)
	}
	else {
		return (
			<div className="content-group">
				{props.GroupType}
			</div>
		)
	}
}
