import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React from "react";

const Blog = ({title,description,imageURL,userName}) => {
  return (
    <div>
        {" "}
       <Card sx={{ maxWidth: "35%",margin:'auto',mt:2, padding: 2, boxShadow: "10px 10px 15px #ccc", ":hover:": {
         boxShadow: "15px  15px 25px #ccc",
       }, }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {userName}
          </Avatar>
        }
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
};

export default Blog;