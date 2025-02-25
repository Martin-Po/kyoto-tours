import { useState } from "react";
import { Grid2 as Grid, Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


export const Gallery = ({ images }) => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedImage(null);
        setOpen(false);
    };

    const [isWider, setIsWider] = useState(true);

    const handleImageLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        setIsWider(naturalWidth >= naturalHeight);
        console.log(naturalWidth >= naturalHeight);
        console.log(naturalWidth);
        console.log(naturalHeight);



    };

    return (
        <>
            <Grid
                container
                margin="0 auto 40px auto"
                columnSpacing={{ xs: "0.15rem", sm: "1rem" }}
                rowSpacing={{ xs: "0.15rem", sm: "1rem" }}
                display="flex"
                justifyContent="space-evenly"
                alignItems="flex-start"
                sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    "@media (max-width:1399px)": {
                        width: "1280px",
                    },
                    "@media (max-width:1299px)": {
                        width: "100%",
                    },
                }}
                paddingX={{ xs: "1rem", md: "1.5rem" }}
            >
                {images.map((image) => (
                    <Grid
                        key={image.id}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        size={{ xs: 4, md: 3 }}
                    >
                        <style>
                            {`
                            .image-container {
                                position: relative;
                                width: 100%;
                                max-width: 350px;
                                aspect-ratio: 1 / 1;
                                overflow: hidden;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                cursor: pointer;
                            }

                            .responsive-img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                border-radius: 15px;
                            }

                            @media (max-width: 768px) {
                                .responsive-img {
                                    border-radius: 0;
                                }
                            }
                            `}
                        </style>
                        <div
                            className="image-container"
                            onClick={() => handleOpen(image)}
                        >
                            <img
                                className="responsive-img"
                                loading="lazy"
                                src={image.url}
                                alt="Tour"
                            />
                        </div>
                    </Grid>
                ))}
            </Grid>

            {/* Modal for displaying the image */}
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "100vw",
                    maxHeight: "100vh",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        ...(isWider
                            ? {
                                maxWidth: "90vw", // Constrain the container to viewport width
                                maxHeight: "90vh", // Constrain the container to viewport height
                            }
                            : {
                                height: "90vh", // Set the height for non-wider case
                                maxWidth: "90vw", // Keep max width for both cases
                            }),
                        overflow: "hidden", // Prevent any overflow
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "black", // Optional: to avoid transparency
                        borderRadius: "10px",
                        '@media (max-width: 730px)': {
                            height: 'auto', // Set height to auto when the screen is smaller than 768px
                        },
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            zIndex: 10,
                            color: "white",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        onLoad={handleImageLoad}
                        src={selectedImage?.url}
                        alt="Full-size view"
                        style={
                            isWider ?
                                {
                                    maxWidth: "100%", // Ensure the image does not exceed the container width
                                    maxHeight: "100%", // Ensure the image does not exceed the container height
                                    objectFit: "contain", // Maintain aspect ratio without cropping
                                } :
                                {
                                    maxWidth: "100%", // Ensure the image does not exceed the container width

                                    maxHeight: '100%'
                                }
                        }
                    />
                </Box>
            </Modal>





        </>
    );
};
