import { StatusBar } from 'expo-status-bar';
import {ScrollView, Image, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-web';
import {images} from '../constants'
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
   <SafeAreaView className="bg-indigo-400 h-full">
    <ScrollView contentContainerStyle={{height:'100%'}}>
    <View className="w-full justify-center items-center
    min-h-screen h-[85vh] px-4">
      <Image 
        source={images.mythical}
        className="w-[300px] h-[85px] pt-10"
        resizeMode='contain'
      />
      <View className="relative mt-5">
        <Text className="text-2xl text-white font-u_bold text-center">is your gateway to the ancient world, where the might of the Greek pantheon comes 
          to life at your fingertips. With the tagline "Power, Glory, Immortality," this app lets you explore the legends
          of the gods and goddesses of Greek mythology anytime, anywhere. Whether you seek wisdom from Athena, the might of Zeus,
         or the charm of Aphrodite, the world of the divine is always within reach.</Text>
      </View>
      <CustomButton
        title="Continue with Email"
        handlePress={()=> router.push('/sign-in')}
        containerStyles="w-full mt-7"

      >


      </CustomButton>






    </View>



    </ScrollView>



   </SafeAreaView>
  );
}

