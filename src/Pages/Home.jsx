import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container, useMediaQuery, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@emotion/react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '../assets/pdfDownloader/pdf.downloader';

const prayers = [
  {
    heading: 'നിസ്കാരത്തിലെ പ്രാരംഭ പ്രാർത്ഥനകൾ',
    content: `
      ١. سُبْـحانَكَ اللّهُـمَّ وَبِحَمْـدِكَ وَتَبارَكَ اسْمُـكَ وَتَعـالى جَـدُّكَ وَلا إِلهَ غَيْرُك<br/><br/>
      ٢. اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَاىَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ ، اَللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الأَبْيَضُ مِنْ الدَّنَسِ ، اَللهُمَّ اغْسِلْنِي مِنَ خَطَايَايَ بِالثَّلْجِ وَالْمَاءِ وَالْبَرَدِ
    `
  },
  {
    heading: 'റുകൂഇലെ പ്രാർത്ഥനകൾ',
    content: `
      ١. سُبْـحَانَ رَبِّـيَ الْعَظِـيمِ<br/><br/>
      ٢. سُبْـحانَكَ اللّهُـمَّ رَبَّـنَا وَبِحَـمْدِكَ ، اللّهُـمَّ اغْفِـرْ لِي
    `
  },
  {
    heading: 'ഇഅത്തിദാലിലെ പ്രാർത്ഥന',
    content: `
      ١. سَمِـعَ اللهُ لِمَـنْ حَمِـدَه<br/><br/>
      ٢. رَبَّنـا وَلَكَ الحَمْـدُ حَمْـداً كَثـيراً طَيِّـباً مُـبارَكاً فِيهِ
    `
  },
  {
    heading: 'സുജൂദിലെ പ്രാർത്ഥനകൾ',
    content: `
      ١. سُبْـحانَ رَبِّـيَ الأَعْلَـى<br/><br/>
      ٢. سُبْـحانَكَ اللّهُـمَّ رَبَّـنَا وَبِحَـمْدِكَ ، اللّهُـمَّ اغْفِـرْ لِي<br/><br/>
      ٣. اللّهُـمَّ اغْفِـرْ لِي ، وَارْحَمْـنِي ، وَاهْدِنِـي ، وَاجْبُرْنِـي ، وَعافِنِـي وَارْزُقْنِـي وَارْفَعْـنِي
    `
  },
  {
    heading: 'അത്തഹിയ്യാത്ത്',
    content: `
      ١. التَّحِيّـاتُ للهِ وَالصَّلَـوَاتُ والطَّيِّـبَاتُ ، السَّلَامُ عَلَيْـكَ أَيُّهَـا النَّبِـيُّ وَرَحْمَـةُ اللهِ وَبَرَكَـاتُهُ ، السَّلَامُ عَلَيْـنَا وَعَلَـى عِبَـادِ للهِ الصَّـالِحِـين . أَشْـهَدُ أَنْ لَا إِلـهَ إِلاّ اللهُ ، وَأَشْـهَدُ أَنَّ مُحَمّـداً عَبْـدُهُ وَرَسـولُهُ
    `
  },
  {
    heading: 'ഇബ്‌റാഹീമിയ്യ സ്വലാത്ത്',
    content: `
      ١. اَللهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ ، اَللهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ
    `
  },
  {
    heading: 'അത്തഹിയ്യാത്തിലെ ദുആ',
    content: `
      ١. اللّهُـمَّ اغْـفِرْ لِي مَا قَدَّمْـتُ وَما أَخَّرْتُ ، وَمَا أَسْـرَرْتُ وَمَا أَعْلَـنْتُ ، وَمَا أَسْـرَفْتُ ، وَمَا أَنْتَ أَعْـلَمُ بِهِ مِنِّي . أَنْتَ المُقَـدِّمُ، وَأَنْتَ المُـؤَخِّـرُ لَا إِلَهَ إِلاَّ أَنْـتَ<br/><br/>
      ٢. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ<br/><br/>
      ٣. اللّهُـمَّ إِنِّـي ظَلَـمْتُ نَفْسِـي ظُلْمـاً كَثِـيراً وَلَا يَغْـفِرُ الذُّنُـوبَ إِلاّ أَنْتَ ، فَاغْـفِرْ لِي مَغْـفِرَةً مِنْ عِنْـدِكَ وَارْحَمْـنِي، إِنَّكَ أَنْتَ الغَـفُورُ الرَّحِـيمِ
    `
  }
];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjusts for small screens

  const downloadPDF = (heading, content) => {
    
  };


  return (
    <Container style={{ padding: isMobile ? '10px' : '20px' }}>
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        align="center"
        gutterBottom
        style={{ fontWeight: 'bold', fontSize: isMobile ? '1.5rem' : '2rem' }}
      >
        പ്രാർത്ഥനകൾ
      </Typography>
      {prayers.map((prayer, index) => (
        <Accordion
          key={index}
          style={{
            marginBottom: '10px',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            style={{ backgroundColor: '#f5f5f5' }}
          >
            <Typography
              variant={isMobile ? 'subtitle1' : 'h6'}
              style={{ fontWeight: 'bold', color: '#3f51b5', fontSize: isMobile ? '1rem' : '1.25rem' }}
            >
              {prayer.heading}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography
              style={{ lineHeight: '1.6', fontSize: isMobile ? '0.9rem' : '1.1rem' }}
              dangerouslySetInnerHTML={{ __html: prayer.content }}
            />
            {/* <PDFDownloadLink
              document={<MyDocument prayers={[prayer]} />}
              fileName={`${prayer.heading}.pdf`}
              style={{ textDecoration: 'none' }}
            >
              {({ blob, url, loading, error }) =>
                loading ? (
                  'Loading document...'
                ) : (
                  <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                    Download as PDF
                  </Button>
                )
              }
            </PDFDownloadLink> */}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};


export default Home;
