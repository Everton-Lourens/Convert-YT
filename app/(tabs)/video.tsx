//import { fetch } from 'react-native-ssl-pinning';

import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Button, Alert, TextInput } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { router } from 'expo-router';
import React from 'react';
import { getUrlYoutubeVideoDownloadWithId } from '@/scripts/youtube-link';


export default function TabTwoScreen() {
  //const params = useLocalSearchParams<{ q?: string }>();
  //const [search, setSearch] = React.useState(params.q);
  const [urlInput, setUrlInput] = React.useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/video.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Baixar Vídeo</ThemedText>
      </ThemedView>
      <ThemedText>Copie e cole o link do Youtube aqui:</ThemedText>

      <TextInput
        placeholderTextColor="#A0A0A0"
        placeholder="> Copie e cole o link aqui <"
        onChangeText={url => {
          setUrlInput(url);
        }}
        value={urlInput}
        style={{
          borderRadius: 12,
          backgroundColor: '#fff',
          fontSize: 24,
          color: '#000',
          margin: 12,
          padding: 16,
        }}
      />

      <Button title={'Baixar Vídeo'} onPress={async () => {
        const urlDownloadFromBrowser = await getUrlYoutubeVideoDownloadWithId(urlInput) as any;
        if (typeof urlDownloadFromBrowser?.link === 'string' && urlDownloadFromBrowser?.link.includes('http')) {
          setUrlInput('');
          router.push(urlDownloadFromBrowser.link);
        }
        else
          Platform.OS === 'web' ? alert('Erro ao baixar Vídeo') : Alert.alert('Erro ao baixar Vídeo');
      }} />


      <Collapsible title="CRIADO POR:">
        <ThemedText style={{ alignSelf: 'center' }} type="defaultSemiBold">Everton Lourens</ThemedText>

        <ExternalLink style={{ alignSelf: 'center' }} href="https://www.instagram.com/everton_lourens">
          <ThemedText type="link">Acesse meu instagram {'>'}</ThemedText>
        </ExternalLink>
        <Image source={require('@/assets/images/everton-lourens.jpg')} style={{ alignSelf: 'center' }} />

      </Collapsible>

    </ParallaxScrollView>


  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

