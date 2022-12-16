const ImageSection = ({ data, margin, width, separate, frame }) => {
  const wrapperClasses = frame ? 
                            "img-wrapper img-frame"
                            : "img-wrapper"

  return (
    <div className="inline-section" style={{marginRight: margin, marginLeft: margin}}>
      {separate 
        ? data.map((imgData) => (
              <div key={imgData.id} className={wrapperClasses} style={{width: width}}> 
                <img src={imgData.path}/>
                {(imgData.caption !== "") ? (<p className="caption">{imgData.caption}</p>) : (<></>)}
              </div>     
        ))
        : (
        <div className={wrapperClasses} style={{width: width}}> 
          {data.map((imgData) => (
              <>
                <img key={imgData.id} src={imgData.path}/>
                {(imgData.caption !== "") ? (<p className="caption">{imgData.caption}</p>) : (<></>)}
              </>
          ))}
        </div>
        )
      }
    </div>
  )
}

export default ImageSection