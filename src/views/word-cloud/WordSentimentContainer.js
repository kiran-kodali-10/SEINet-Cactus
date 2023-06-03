import React from 'react'

class WordSentimentContainer extends React.Component {
  
    render(props) {
        if(!this.props.clickedTopic.id )
            return null;
        return (
            <div>
                <h2>Information on topic '{this.props.clickedTopic.label}'</h2>
                <h3>Total mentions: {this.props.clickedTopic.volume}</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Positive mentions:</td>
                            <td className="positive value">{this.props.clickedTopic.sentiment.positive ?? 0}</td>
                        </tr>
                        <tr>
                            <td>Neutral mentions:</td>
                            <td className="value">{this.props.clickedTopic.sentiment.neutral ?? 0}</td>
                        </tr>
                        <tr>
                            <td>Negative mentions:</td>
                            <td className="negative value">{this.props.clickedTopic.sentiment.negative ?? 0}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default WordSentimentContainer