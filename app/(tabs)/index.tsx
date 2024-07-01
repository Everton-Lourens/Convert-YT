import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/el.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Baixe suas músicas e{'\n'}videos do Youtube</ThemedText>
        </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 1: copie o link da música/video no youtube</ThemedText>
        <ThemedText>
          Abra o Youtube, <ThemedText type="defaultSemiBold">aperte em compartilhar</ThemedText> clique em copiar link.{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 2: Volte para esse aplicativo</ThemedText>
        <ThemedText>
          Clique na opção de música ou video na parte de baixo do aplicativo e <ThemedText type="defaultSemiBold">cole o link copiado</ThemedText>.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 3: Baixe sua música/video</ThemedText>
        <ThemedText>
          Clique em <ThemedText type="defaultSemiBold">baixar</ThemedText> e aguarde baixar a música/video{' '}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
