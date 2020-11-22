import React from 'react';

import { Container, TitlePage, SubtitlePage } from './styles';

export default function SectionHeader({
  sectionName,
  subtextSectionName,
  marginBottom,
  padding,
}) {
  return (
    <Container padding={padding} marginBottom={marginBottom}>
      <TitlePage>{sectionName}</TitlePage>
      <SubtitlePage>{subtextSectionName}</SubtitlePage>
    </Container>
  );
}
