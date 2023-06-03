import React from 'react'
import ReactWordcloud from 'react-wordcloud';

class WordCloudContainer extends React.PureComponent {

    //#region WordContainer Properties
    callbacks = {
        getWordColor: (word) => word.value > 60 ? 'green' : word.value < 40 ? 'red' : 'grey',
        onWordClick: (word) => this.showMetadata(word.id)
    }

    size0 = 16

    options = {
        rotations: 0,
        fontFamily: 'impact',
        fontSizes: [this.size0, this.size0 * 4, this.size0 * 6, this.size0 * 8, this.size0 * 12],
        transitionDuration: 1000,
        enableTooltip: false
    };

    //#endregion

    //#region Functions
    showMetadata(id) {
        this.props.parentCallback(id);
    }
    //#endregion

    //#region Render Method
    render() {
        return (
            <div className='alignleft'>
                <ReactWordcloud
                    words={this.props.topics}
                    options={this.options}
                    callbacks={this.callbacks} />
            </div>
        )

    }
    //#endregion
}
export default WordCloudContainer