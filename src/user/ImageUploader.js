import React from 'react'
import { ImageUploadField } from 'react-image-file'

export class App extends React.Component{
  constructor( props, context ){
    super( props, context )
    this.state = { files: [] }
  }
  onFilesChange = ( files: File[] ) =>{
    this.setState( { files } )
  }
  onSubmit = ( evt: FormEvent<HTMLFormElement> ) => {
    evt.preventDefault()
    const { files, file:[file], text } = this.state
    const body = new FormData();
    body.append('text',text)
    body.append('file',file)
    files.map( ( f, i ) => body.append(`files[${i}]`,f) )
    fetch('http://localhost:5000/user/images', { method:'POST', body })
      .then( response => response.json() )
      .then( response => console.log( response ) )
    console.log(body)
    console.log( { text, file ,files } )
  }
  render(){
      return(
        <ImageUploadField
          label='upload images'
          imageWidth={50}
          imageHeight={50}
          multiple
          thumbnailClassName="upload-thumbnail"
          onChange={(files)=>this.setState({files:files})}
          files={this.state.files}
      />
    );
  }
}
