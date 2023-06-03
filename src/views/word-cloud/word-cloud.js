import React from 'react'

import WordCloudContainer from './WordCloudContainer'
import WordSentimentContainer from './WordSentimentContainer'

// import styles from '../styles.css'
import { topics } from './data.json'

class ChallengeContainer extends React.Component {
	state = {
		dataLoaded: false
	}

	wordCloudArray = [];

	componentDidMount() {
        console.log("word cloud component")
		if (!this.state.dataLoaded) {
			this.setState({ topics: topics })
			this.setState({ dataLoaded: true })
		}
		this.getMyWordCloudMapping();
	}


	handleCallback = (childData) => {
		this.setState({ clickedTopicId: childData })
	}

	getMyWordCloudMapping() {
		this.wordCloudArray = Array.from(topics).map((item) => (
			<myWords
				id={item.id}
				text={item.label}
				value={item.volume} />
		)).map(x => x.props)
	}

	myClickedTopic = () => {
		return this.state.clickedTopicId ? this.state.topics.find(topic => topic.id === this.state.clickedTopicId) : []
	}

	render() {
		return (
			<div>
				<div className="alignleft" >
					<WordCloudContainer topics={this.wordCloudArray} parentCallback={this.handleCallback} />
				</div>
				<div className="alignright" >
					<WordSentimentContainer clickedTopic={this.myClickedTopic()} />
				</div>
			</div>
		);
	}
}
export default ChallengeContainer