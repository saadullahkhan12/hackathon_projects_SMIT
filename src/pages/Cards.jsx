import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

function Cards() {
    
    return (
        <>
         <div>
         <div className="main-container-2">

<div className="main-container-2-para" >
  <h1> What We Offers</h1>
<p className="sec1-para">Applying for an online loan is simpler than ever. No need to go through the hassle of long paperwork or bank visits. Everything can be done online in just a few clicks.</p>
</div>
<div className="main-container-2-img"><img src='https://avatars.mds.yandex.net/i?id=67aea6680d76869951d3af1cff82896d99387242-10869732-images-thumbs&n=13' className="loanimg" alt="Vite logo" />
</div>
    </div>
    


<div>
  <h1 className="Loanheading">Online Loan</h1>
</div>
         </div>

<div className="blurbcont">
  <div><Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://d1.awsstatic.com/aws-educate/rawpixel-660716-unsplash.19e647fd0cfaa07ada7f7966c825b96451ff8799.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Business Startup Loans
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/businessload"><Button size="small">Apply For Loan</Button></Link>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></div>
    <div><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://paytmblogcdn.paytm.com/wp-content/uploads/2023/08/Blog_Paytm_Education-Loan-Eligibility-Criteria-Documents-Required.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Education Loans


        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/businessload"><Button size="small">Apply For Loan</Button></Link>  
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></div>

</div>

<div className="blurbcontsec">
  <div>
    <Card className="gg" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://nypost.com/wp-content/uploads/sites/2/2020/08/wedding-1.jpg?quality=75&amp;strip=all&amp;w=1024"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Wedding Loans


        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/weddingload"><Button size="small">Apply For Loan</Button></Link>
      <Button size="small">Learn More</Button>
      </CardActions>
    </Card></div>
    <div><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.ytimg.com/vi/8QqQ1TdDpMM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgTihIMA8=&amp;rs=AOn4CLDrFRoIksIwOUU9i73WBEz03fKbjQ"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Home Construction Loans
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/homeload"><Button size="small">Apply For Loan</Button></Link>
      <Button size="small">Learn More</Button>
      </CardActions>
    </Card></div>

</div>
</>
    );
}

export default Cards;