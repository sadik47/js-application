import React, { Component } from 'react';

class backgrounds extends Component {
  render() {


    const backgrounds = [
      {
        name: "bunny-ears",
        type: "mp4"
      },
      {
        name: "outer-space",
        type: "mp4"
      },
      {
        name: "superhero-yeti",
        type: "mp4"
      },
      {
        name: "toboggan",
        type: "jpg"
      },
      {
        name: "yeti-village",
        type: "jpg"
      },
    ];

    const dataItems = backgrounds.map((data)=>{
      return <image>{data.name}</image>
    });
  


    return (
      <div>
        <image>
          {dataItems}
        </image>
      </div>
    );
  }
}

export default backgrounds;