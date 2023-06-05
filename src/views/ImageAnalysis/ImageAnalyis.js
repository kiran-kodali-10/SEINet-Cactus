import { Button, Grid, Input } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import PieChart from "./PieChart";
import './ImageAnalysis.css';
import gifImage from '../../assets/images/bubble-pop.gif'

export default function ImageAnalysis() {

    const [image, setImage] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [tempData, setTempData] = useState(null); // State variable to display the image
    const [loader, setLoader] = useState(false);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        setTempData(URL.createObjectURL(file));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (image === null)
            alert("no image selected")
        else {
            const formData = new FormData();
            formData.append('image', image)
            setLoader(true);
            const data = fetch('/api/uploadImage', {
                method: 'POST',
                body: formData
            })
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);
                    setResponseData(data);
                    setLoader(false);
                })
                .catch((error) => {
                    console.log(error);

                })
        }
    }

    return (
        <Grid container style={{ paddingTop: "30px", paddingLeft: "30px" }} className="image-analysis-container">
            <Grid item>
                <form onSubmit={handleFormSubmit}>
                    <Input type="file" onChange={handleImageChange} />
                    <Button type="submit" variant="contained">Upload</Button>
                    {
                        image ?
                            <div className="image-container">
                                <img src={tempData} alt="uploaded image" />
                            </div>
                            :
                            null
                    }
                </form>
            </Grid>
            <Grid item >
                {
                    loader ?
                        <Grid container justifyContent='center' alignContent='center' style={{ height: "80vh" }}>
                            <Grid item>
                                <img src={gifImage} alt="Moving GIF" />
                                <h4 style={{display: "flex", justifyContent:"center"}}>Analyzing the image . . .</h4>
                            </Grid>
                        </Grid>
                        :
                        responseData ?
                            <PieChart data={responseData} />
                            :
                            null

                }

            </Grid>
        </Grid>
    )
}