import './App.css';
import {useRef} from 'react';

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';



import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';


const pages = ['הקדמה','חדו"א 1', 'מבוא למדמח ב-c'];


function App() {
  const ref = useRef(null);

  useEffect(() => {
  
    document.addEventListener('scroll', (e)=> {
      console.log(document.documentElement.scrollTop)
      if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
         {
          setScrolled(true)

         }
         else{
          setScrolled(false)
         }
     });
  });

 



  const subjectInCHebrew = ['פתח דבר ויצוג בסיסיים שונים','לא אעשה הסבר על יסודות התכנות','מגבלת הטיפוס int וייצוג מספר שלילי','כתובות ומצביעים'
  ,'הקצאה דינמית','מחרוזות'];
  
  const subjectInCURL = ['https://drive.google.com/file/d/10dZjX1qrRoV9j9MxNvd4RjpEqDCGeFqu/',
  'https://drive.google.com/file/d/10msS5BBD4di_tY1OvlsP0RXRGCd_QJKN/',
  'https://drive.google.com/file/d/10gEDOTcMjnQ_-cta4VJWXz580_8ppwmq/'
  ,'https://drive.google.com/file/d/10mE18Qa_SbnFndnToF_Agb9rWVggZ2Wb/','https://drive.google.com/file/d/10qx-_nsaCI2YbnxllFd-z-J48u6vKFFu/','https://drive.google.com/file/d/10tzYxbXGLIm9C7qdSuHa1qiVxKjeZyyD/'];


  const subjectInCalcus = ['Induction','InequalityOfArithmetic','SubDense','Neighborhood','LimitOfSeq','LimitOfSeqArithmetic','InfntyLimitOfSeq','InfntyLimitArithmetic'
  ,'LimitingBehavior','ConvergenceTests','BlockedAndMono','LemaOfCantor','SubSeries','BolzanoWeierstrass','UpperLowerBounds','CauchySequence','Functions'];

  const subjectInCalcusHebrew = ['אינדוקציה','אי שיווין הממוצעים ','צפיפות תת-קבוצה ','סביבה וכמעט לכל n','גבול של סדרה ','אריתמטיקה של גבול סופי','גבול במובן הרחב','אריתמטיקה של גבול במובן הרחב'
  ,'סדרי גודל','מבחן המנה לגבולות ','סדרות חסומות ומונוטוניות','הלמה של קנטר','תת-סדרות','בולצאנו ויירשטראס','גבול עליון ותחתון','קריטריון קושי','פונקציות'];

  const subjectInCalcusURL = ['https://drive.google.com/file/d/1-kk7vGWF6sNMawKnhDGZCxyKjmJFO6eq/','https://drive.google.com/file/d/1-u4D3Nx0L-MqTBGop7XujHuFr4Fp22Jn/',
  'https://drive.google.com/file/d/1-pCOKqu03Ye4nzCHCg8xCRDCuUpD8EOE/',
  'https://drive.google.com/file/d/100_iqA59zMtgI7ymbmxRB4EUKhb5y4UG/','https://drive.google.com/file/d/1-yQuwKvvyih6PFWmPSEPBi4f74FihaCM/','https://drive.google.com/file/d/105rwVV7km0nrpibgqhoI88-rFXONxPws/',
  'https://drive.google.com/file/d/10CEqT0lYrjqJ5uoVedgD85tBsSlQXgCL/','https://drive.google.com/file/d/10E_V2M7Aeif87sJeDgWf3_yGawpXZE20/',
  ,'https://drive.google.com/file/d/10FZ6GiIHmgSnOx84M-womVHXUUqoWVBj/','https://drive.google.com/file/d/10Guu3U4ZmR4lOnMmcCipMq8yl7bsFags/',
  'https://drive.google.com/file/d/10HXbEOOSwzfEZU5RdaikKeHLhxzT_A4c/','https://drive.google.com/file/d/10P_q9-e8JZtGrXFHVwpLXt-zD3IqqZnT/',
  'https://drive.google.com/file/d/10Rb5Q89D2dZzFJIxLAo_U2BoSuYv_phP/','https://drive.google.com/file/d/10VeKPpmHpVuf40W7gHWKXCyVMKySQSnh/',
  'https://drive.google.com/file/d/10VghZ6zQCvuh11UACknHcc1xzLxtF01b/','https://drive.google.com/file/d/10Vpjn0kqbFHpj72DvJ8262aacSKCmbPA/',
  'https://drive.google.com/file/d/10nVVLOygd-4fmNK9eG1J_mpdy3lkYE0f/'];


  const subjectInC = ['bases','skipi','theIntSigned','address'];
  
  const [URL,setURL] = useState("https://drive.google.com/file/d/1-tSwUpC4sAiYf7bVlRP8ecuPE5UI9tHC/")
  const [scrolled, setScrolled] = useState(false);
  const [choosenSubHeb,setChoosenSubHeb] = useState([])
  const [choosenSub,setChoosenSub] = useState([])
  const [choosenSubURL,setChoosenSubURL] = useState([])
  const [italic, setItalic] = useState(false);
  const [fontWeight, setFontWeight] = useState('normal');
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setURL('');
    console.log(e.target.id);
    setCurrentPage(e.target.id);
    if(e.target.id===pages[0]){
      setChoosenSub([]);
      setChoosenSubHeb([]);
      setChoosenSubURL([])
      setURL("https://drive.google.com/file/d/1-tSwUpC4sAiYf7bVlRP8ecuPE5UI9tHC/")
    }

    if(e.target.id===pages[1]){
      setChoosenSub(subjectInCalcus);
      setChoosenSubHeb(subjectInCalcusHebrew);
      setChoosenSubURL(subjectInCalcusURL)
    }
    if(e.target.id===pages[2]){
      setChoosenSub(subjectInCHebrew);
      setChoosenSubHeb(subjectInCHebrew);
      setChoosenSubURL(subjectInCURL)
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
const handleRadioChange = async(e)=>{
  setURL(e.target.id)
  await setTimeout(() => {}, 100);
  ref.current?.scrollIntoView({behavior: 'smooth'});

}


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  return (
    <div className="App">
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src='https://i.imgur.com/Eb5gEmq.png' style={{width:"30px"}}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RENAN'S NOTEBOOK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}  id={page} onClick={handleCloseNavMenu}>
                  <Typography dir='rtl' textAlign="center" id={page}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      
          <Typography
            variant="h5"
            noWrap
            component="a"
        
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <span onClick={handleOpenNavMenu}>מחברת - רנן</span>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' ,},   }} dir='rtl'>
            {pages.map((page) => (
              <Button 
                key={page}
                id={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,border: "1px solid",borderColor:"'white'",fontSize:"25px",marginLeft:"10px"}}
              >
                {page}
              </Button>
            ))}
          </Box>
   
  
        </Toolbar>
      </Container>
    </AppBar>

    
    <h3 dir='rtl' style={{"textAlign":"center"}}>נושאי-{currentPage}</h3>
    <Box >
      
      <RadioGroup
        onClick={handleRadioChange}
        size="lg"
        sx={{ gap: 1.5,display:"flex","flexDirection":"row-reverse ",flexWrap:"wrap" }}
      >
        {choosenSub!=null?choosenSub.map((value,i) => (
          <Sheet key={value} sx={{ p: 2, borderRadius: 'md' }}>
            <Radio
            dir='rtl'
              label={choosenSubHeb[i]}
              overlay
              disableIcon
              id={choosenSubURL[i]}
              value={choosenSubHeb[i]}
              componentsProps={{
                label: ({ checked }) => ({
                  
                  
                  sx: {
            
                    fontWeight: 'lg',
                    fontSize: 'md',
                    color: checked ? 'text.primary' : 'text.secondary',

                  },
                }),
                
                action: ({ checked }) => ({
                 
                  sx: (theme) => ({
                    ...(checked && {
                      '--variant-borderWidth': '3px',
                      '&&': {
                        // && to increase the specificity to win the base :hover styles
                        borderColor: theme.vars.palette.primary[500],
                      },
                    }),
                  }),
                }),
              }}
            />
          </Sheet>
        )):""}
      </RadioGroup>
    </Box>
    <br/>
    <div>
      
      {URL.length > 1?
      <iframe
      ref={ref}
      frameborder="0"
      scrolling="no"
      width={"100%"}
      height={"2500px"}
      src={`${URL}preview`}>0
      

    </iframe>:""}
    </div>

    <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          display: scrolled?'block':'none',
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: 'blue',
          color: '#fff',
          textAlign: 'center',
        }}
      >
       שנה נושא
      </button>
    <footer> <a href='https://renanbazinin.github.io/RenanBazininSite/'>Created by renan, mysite</a></footer>
    </div>
  );
}

export default App;
