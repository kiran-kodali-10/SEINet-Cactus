import React, { useEffect } from 'react'
import WORDCLOUDDATA from '../../data/word-cloud-data.json'
import ReactWordcloud from 'react-wordcloud'
import { Grid } from '@material-ui/core'
import "./word-cloud.css"
// import WordCloudContainer from './WordCloudContainer'
// import WordSentimentContainer from './WordSentimentContainer'

// // import styles from '../styles.css'
// import { topics } from './data.json'

// class ChallengeContainer extends React.Component {
// 	state = {
// 		dataLoaded: false
// 	}

// 	wordCloudArray = [];

// 	componentDidMount() {
//         console.log("word cloud component")
// 		if (!this.state.dataLoaded) {
// 			this.setState({ topics: topics })
// 			this.setState({ dataLoaded: true })
// 		}
// 		this.getMyWordCloudMapping();
// 	}


// 	handleCallback = (childData) => {
// 		this.setState({ clickedTopicId: childData })
// 	}

// 	getMyWordCloudMapping() {
// 		this.wordCloudArray = Array.from(topics).map((item) => (
// 			<myWords
// 				id={item.id}
// 				text={item.label}
// 				value={item.volume} />
// 		)).map(x => x.props)
// 	}

// 	myClickedTopic = () => {
// 		return this.state.clickedTopicId ? this.state.topics.find(topic => topic.id === this.state.clickedTopicId) : []
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<div className="alignleft" >
// 					<WordCloudContainer topics={this.wordCloudArray} parentCallback={this.handleCallback} />
// 				</div>
// 				<div className="alignright" >
// 					<WordSentimentContainer clickedTopic={this.myClickedTopic()} />
// 				</div>
// 			</div>
// 		);
// 	}
// }
// export default ChallengeContainer

export default function WordArt(props) {

	useEffect(() => {
		console.log(WORDCLOUDDATA.data)
	}, [])

	// const callbacks = {
	// 	getWordColor: 
	// }

	return (
		<Grid container alignItems='center' spacing={5} className='word-cloud-container'>
			<Grid item
				md={12}
				sm={12}
				xs={12}>
					<ReactWordcloud 
					words={WORDCLOUDDATA.data} 
					// size={[900, 900]}
					/>
			</Grid>
		</Grid>
	)
}