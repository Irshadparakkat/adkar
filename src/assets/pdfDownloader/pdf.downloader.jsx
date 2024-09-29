import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Import font files directly
import NotoSansRegular from '@fontsource/noto-sans/files/noto-sans-latin-400-normal.woff';
import NotoSerifRegular from '@fontsource/noto-serif/files/noto-serif-latin-400-normal.woff';

// Register fonts for different languages
Font.register({
  family: 'Noto Sans',
  src: NotoSansRegular,
});

Font.register({
  family: 'Noto Serif',
  src: NotoSerifRegular,
});

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  section: {
    marginBottom: 10,
    padding: 10,
    border: '1px solid #ddd',
    borderRadius: 5,
  },
  heading: {
    fontSize: 18,
    marginBottom: 5,
  },
  content: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});

// Function to determine the font family based on text content
const getFontFamily = (text) => {
  if (/[\u0D00-\u0D7F]/.test(text)) { // Malayalam Unicode range
    return 'Noto Sans'; // Change if you have a different font for Malayalam
  }
  if (/[\u0600-\u06FF]/.test(text)) { // Arabic Unicode range
    return 'Noto Serif'; // Change if you have a different font for Arabic
  }
  return 'Noto Sans'; // Default font
};

// Create a PDF document component
const MyDocument = ({ prayers }) => (
  <Document>
    <Page style={styles.page}>
      {prayers.map((prayer, index) => (
        <View key={index} style={styles.section}>
          <Text style={{ ...styles.heading, fontFamily: getFontFamily(prayer.heading) }}>
            {prayer.heading}
          </Text>
          <Text style={{ ...styles.content, fontFamily: getFontFamily(prayer.content) }}>
            {prayer.content.replace(/<br\s*\/?>/g, '\n')}
          </Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default MyDocument;
