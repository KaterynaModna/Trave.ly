import { Card, CardActionArea, CardMedia, Typography, CardContent} from "@mui/material";

export default function TourCard({ photo, name, lokal, category, address }) {
    return (
        <Card className="tourcard" sx={{ maxWidth: 450 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={photo}
            alt="Tour"
          />
          <CardContent >
            <Typography className="tourcard_name" gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {category}
            </Typography>
            <Typography className="tourcard_lokal" variant="body2" color="text.secondary">
            {lokal}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
    );
  }

{/* <div className="one_tourcard">
<div className="card_header_wrapper">
  <h6 className="comment_header">{name}</h6>
  <div className="tour_photo_wrapper">
  <img className="tour_photo" src={photo} alt="Tour" />
  </div>
  <h6 className="comment_header">{category}</h6>
  <p className="tourcard_lokal">{lokal}</p>
  <p className="tourcard_address">{address}</p>
</div>
</div> */}