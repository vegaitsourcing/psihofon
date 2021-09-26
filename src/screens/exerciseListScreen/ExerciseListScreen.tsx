import React, {useState} from 'react';
import {SolidBackground} from '../../components/solidBackground/SolidBackground';
import {Keyboard, View} from 'react-native';
import {CustomButton} from '../../components/buttons/customButton/CustomButton';
import {FlatList} from 'react-native-gesture-handler';
import {useHeader} from '../../hooks/useHeader';
import styles from './style';
import {ExerciseListScreenProps} from '../../navigation/SecondExcercisesNavigator';
import {SearchBar} from '../../components/searchBar/SearchBar';
import {MentalStateExercise} from '../../models/MentalState';
import {FadeAnimation} from '../../components/fadeAnimation/FadeAnimation';

export interface ExerciseListScreenParams {
  id: number;
}

export const ExerciseListScreen: React.FC<ExerciseListScreenProps> = ({
  navigation,
  route,
}) => {
  const {id} = route.params;
  const data: MentalStateExercise[] = [
    {
      id: 1,
      title: 'Usmerite pažnju ka onom što možete kontrolisati',
      description:
        'Anksioznost osećamo kao nervozu, brigu, nemir, a u izraženijim oblicima kao strah od određenih situacija. Iako može poticati od nekih osobina ličnosti – npr. perfekcionizma, potrebe za kontrolom ili određenog načina razmišljanja, ono što najviše podstiče anksioznost jeste neizvesnost. Razmislite o različitim neizvesnostima oko sebe i u svom životu. Koje neizvesnosti u vama najviše podstiču da se osećate anksiozno?. Zapišite ih. Nacrtajte veliki krug pored svake neizvesnosti koju ste zapisali. U svakom od krugova napišite delove neizvesne situacije nad kojima imate neku kontrolu, odnosno, na koje možete uticati. Osenčite delove neizvesnih situacija na koje možete uticati. Pogledajte vaš krug. Kakav je odnos osenčenih delova kruga i ostatka? Sada se samo usmerite ka osenčenim delovima kruga i razmislite o svom uticaju na obeležene, kontrolišuće aspekte neizvesnih situacija. Možete li promeniti svoj uticaj, pojačati ga ili dopuniti? Što je veći vaš uticaj na određene delove neizvesne situacije, osećaćete se manje anksiozno.',
      recommendation: 'Vežbu je najbolje raditi dva dana po 20 minuta.',
    },
    {
      id: 2,
      title: 'Ograničite vreme za brigu',
      description:
        'Ako se ujutro probudite i počnete brinuti, stanite i recite sebi da ćete tu brigu sačuvati za svoje &quot;vreme za brige&quot;, koje je uveče. Odvojte uveče 15 minuta. Neka tih 15 minuta bude vaše vreme kada ćete da brinete o stvarima koje su vam smetale tokom dana. Kada dođe veče, na početku &#39;vremena za brigu&#39;, morate misliti o svemu što su bile brige tog dana - pokušajte to učiniti. Setite se svih briga i dajte sebi slobodu i pravo da brinete, jer to je vreme koje ste odvojili za brige. Međutim, najverovatnije je da se nećete sećati svih briga. Neke stvari vam više neće biti vredne brige. Za one stvari koje su vam i dalje briga, možda će vam biti teško da nastavite da brinete.',
      recommendation:
        'Dobro proučite vežbu i primenite je svaki put kada počnete da brinete.',
    },
    {
      id: 3,
      title: 'Zapišite svoje negativne misli',
      description:
        'Negativne misli podstiču anksioznost i zato ih je važno osvestiti. Usmerite pažnju ka svojim mislima.\n\n1. prepoznajte kada, gde i pod kojim okolnostima se kod vas pojavljuju negativne misli;\n\n2. koje misli posebno podstiču da se osećate anksiozno?\n\n3. zapišite svoje negativne misli\n\n4. za svaku zapisanu negativnu misao osmislite pojedinačnu pozitivnu koja je ublažava u određenom smislu. Ako imate negativnu misao “Neću uspeti u tome”, možete je ublažiti na sledeće načine: “Neću uspeti u tome, ali ništa ne gubim da pokušam”, “Neću uspeti u tome, ali vredi da pokušam i steknem iskustvo”, “Neću uspeti u tome? A zašto ne bih uspeo?” Itd. Važno je da izmenjena pozitivnija misao zvuči bar malo realno za vas. Gledajte svoju listu ispravljenih negativnih misli više puta. Ako dobijete novu ideju kako biste mogli ublažiti ili izmeniti svoju negativnu misao, dopišite je.\n\n5. Kontinuirano vežbajte ovu veštinu zamene misli, sve dok ne primetite da redovno obraćate pažnju na to šta mislite.',
      recommendation: 'Radite vežbu tri dana po 20 minuta.',
    },
    {
      id: 4,
      title: 'Budite neutralan posmatrač onoga što se dešava u vašem umu',
      description:
        'Posmatrajte i odnosite se prema svom umu kao prema nekom spoljašnjem objektu, događaju ili osobi. Kada krene sa nekom toksičnom mišlju (“Neću uspeti”), odvojte tu misao od sebe. Možete razgovarati sa svojim umom i reći u sebi: “Evo, moj um/mozak opet kreće sa brigom, opet brine”, ili “Moj um ponovo pokušava da me oneraspoloži”. Možete mu se i zahvaliti: ”Hvala ti što brineš, čula sam te” i usmeriti sebe ka nekoj interesantnoj aktivnosti. Važno je da naučite vaš um koje misli su dobre za vas, a koje ne.',
      recommendation:
        'Dobro proučite vežbu i primenite je svaki put kada počnete da brinete.',
    },
    {
      id: 5,
      title: 'Posmatrajte misli kao oblake koji prolaze',
      description:
        'Pošto mozak ne može da bude prazan i neaktivan, on će stalno izbacivati misli. To mogu biti neke spontane misli ili one koje potiču iz vaših osnovnih ubeđenja. Ali ne zaboravite, misli koje mozak vrti, su njegove priče, sadržaj koji nasumično bira. Misli nisu istine o vama. Zato ih posmatrajte kao oblake koji prolaze iznad vas. Negativne misli posmatrajte kao crne, teške oblake, koji se smenjuju donoseći vedro, sunčano vreme.',
      recommendation:
        'Dobro proučite vežbu i primenite je svaki put kada počnete da brinete.',
    },
    {
      id: 6,
      title: 'Vežbajte disanje i smanjite anksioznost',
      description:
        'Vežbanje disanja potrebno je upražnjavati tokom perioda od najmanje nedelju dana sa dinamikom od dva puta po 10 minuta tokom jednog dana. Svrha vežbe je da s postanete svesniji razlike između stanja tenzije i stanja relaksacije. Takođe, ovaj relaksacioni trening treba da vam pomogne da naučite kako da uspešnije realizujete samokontrolu i time redukujete nepotrebnu anksioznost i tenziju, odnosno, podstaknete telesnu relaksaciju. U svrhu produbljivanja relaksacije možete zamisliti da se nalazite u mirnoj i opuštenoj situaciji.\n\nUputstvo za vežbu disanja: Zauzmite udoban položaj. Stavite ruku na stomak, kada udahnete - stomak će se malo ispupčiti i ruka pomeriti. kada izdahnete - stomak će malo splasnuti i ruka će se pomeriti. Sad zažmurite i dišite polako, duboko, stomakom. Udahnite polako… zadržite vazduh par sekundi… sad polako izdahnite. Ponovo udahnite... zadržite vazduh par sekundi... izdahnite. Kad udahnete kažite, u sebi, “smireno”, kad izdanete kažite, u sebi, “opušteno”. Udahnite i izdahnite nekoliko puta. Otvorite oči.',
      recommendation: '',
    },
    {
      id: 7,
      title: 'Napišite pismo koje nećete poslati',
      description:
        'Ukoliko se osećate anksiozno zbog odnosa ili interakcije sa nekom osobom, verovatno imate dugačku listu dijaloga u vašoj glavi. Šta biste joj rekli, šta bi ona rekla vama, kako bi razgovor tekao. Svakako da je neophodno obaviti živu, realnu komunikaciju sa tom osobom. No, pre toga, napišite pismo. Pišite iskreno, bez zadrške. Navedite kako se osećate, šta vam smeta, šta vas povređuje. Iako pismo nećete poslati, ono će vam pomoći da se oslobodite pritiska, da izbacite višak energije koja vas preplavljuje. Pismo će vam pomoći da povratite olakšanje i smanjite napetost.',
      recommendation: 'Radite vežbu jedan dan, 20 minuta',
    },
    {
      id: 8,
      title: 'Preduzmite male hrabre akcije',
      description:
        'Budite otvoreni za promene. Napravite promenu u svom stilu oblačenja ili frizuri, uradite nešto što ste davno želeli, a niste imali dovoljno hrabrosti. Nakon toga, osvestite zadovoljstvo jer ste bili hrabri i odlučni da uradite nešto potpuno drugačije i donesete svom životu novi kvalitet. Osvestite osećaj da se možete nositi sa promenom i neizvesnosti.',
      recommendation: 'Radite vežbu dva puta nedeljno.',
    },
    {
      id: 9,
      title: 'Upoznajte bolju svoju anksioznost',
      description:
        'Pratite osećanje anksioznosti.\n\nKada nailazi, u kojim situacijama, napravite listu “okidača” anksioznosti. Zapišite ih.\n\nPosebno pokušajte da pratite svoje telo – šta se u njemu dešava, koja vrsta senzacija (stezanje, grčenje, pritiskanje…), u kojim delovima tela se najčešće smešta vaša anksioznost.',
      recommendation: 'Radite vežbu dva puta nedeljno po 10 minuta',
    },
    {
      id: 10,
      title: 'Maštajte o životu bez anksioznosti',
      description:
        'Razmislite u kojim sve aspektima života vas ograničava doživljaj anksioznosti. Zapišite..\n\nNa kraju, zatvorite oči i maštajte kako bi izgledao vaš život bez anksioznosti.',
      recommendation:
        'Dobro proučite vežbu, možete maštati o životu bez anksioznosti svaki dan, uveče pre spavanja',
    },
    {
      id: 11,
      title: 'Promenite odnos prema anksioznosti, ne budite žrtva',
      description:
        'Kada se borite protiv osećanja anksioznosti, povlačite se ili ste očajni jer se tako osećate, žalite se i pričate drugima o svom problemu, vi ste žrtva. Promenite taj odnos, pokušajte da se sprijateljite sa vašom anksioznšću.\n\nNajpre, razmislite kako bi osećaj anksioznosti mogao da izgleda, dajte mu neki oblik. Još bolje je ako nacrtate svoju anksioznost.\n\nPostavite crtež tako da ga možete gledati što češće.\n\nNeka vam lik sa crteža postane poznat i prijatan.\n\nDa li imate nešto da saopštite liku koji predstavlja anksioznost? Šta biste mu rekli, kada bi to bilo moguće?\n\nVaš doživljaj anksioznosti nekada je predstavljao vašu adaptaciju na određenu situaciju. Koristio vam je. Zato, pokušajte da se sprijateljite sa likom sa crteža...',
      recommendation: 'Radite vežbu tri puta nedeljno po 10 minuta',
    },
    {
      id: 12,
      title: 'Režirajte svoju epizodu anksioznosti',
      description:
        'Napravite film u svojoj glavi o jednoj vašoj uobičajenoj sceni anksioznosti. Postavite se u ulogu režisera i odlučite kog žanra će biti vaš film. Najbolje je da počnete sa komedijom.\n\nOdaberite jednu uobičajenu situaciju u kojoj se osećate anksiozno. Možda je to ulazak u prodavnicu ili izlazak na ulicu.\n\nAko ste odabrali komičan scenario, razmislite šta se dalje dešava u vašem filmu. Izašli ste na ulicu, vidite sebe kako se držite za zid ili ste seli jer vas je preplavio osećaj anksioznosti.\n\nUbacite elemente komedije. Da li vam prilaze drugi ljudi i zajedno sa vama sedaju pored zida? Zamislite grupu ljudi koja sedi na ulici, veselo priča i smeje se. Ako vam srce i dalje jako lupa, zamislite kako svi, zajedno, merite krvni pritisak i kako ste od toga napravili zabavu.\n\nŽelimo da vam pomognemo da svoj tipičan obrazac doživljaja anksioznosti izmenite.',
      recommendation: 'Radite vežbu dva puta nedeljno po 10 minuta',
    },
    {
      id: 13,
      title: 'Dodajte novo značenje ansioznosti',
      description:
        'Kada osetite uobičajene znakove anksioznosti – lupanje srca, pritiskanje u grudima, otežano disanje….sledeće što pomislite sigurno je: “nije mi dobro, kreće napad anksioznosti, srušiću se” Naravno, ovi fizički simptomi (lupanje srca, pritiskanje u grudima, otežano disanje) nisu toliko moćni da vas sruše; moćne su misli koje vezujete za njih i koje razvijate u svojoj glavi.\n\nRazmislite. Da li možete vašim simptomima dati neko drugo, novo značenje?\n\nŠta bi za vas još moglo da znači: lupanje srca, pritiskanje u grudima, otežano disanje?\n\nLjudi se osećaju anksiozno kada procenjuju svoj život i događaje u njemu, previše zahtevnim, odnosno, kada im nedostaje samopouzdanja. Dakle, lupanje srca, pritiskanje u grudima i otežano disanje, vas podsećaju da treba sebe da jačate i brinete o sebi.\n\nOd sada, svaki put kada osetite lupanje srca, pritiskanje u grudima i otežano disanje, kažite sebi: “aha, ovo je podsećanje da treba da brinem o sebi. Šta bih danas mogao da uradim za sebe?”',
      recommendation:
        'Dobro proučite vežbu. Radite na njoj jedan dan 20 minuta i primenite je svaki put kada kod vas krene osećaj anksioznosti.',
    },
    {
      id: 14,
      title: 'Razradite strategije za "Šta ako...?" situacije',
      description:
        'Tzv.katastrofične misli koje pokreću anksioznost, najčešće počinju sa “Šta ako…?” “Šta ako se zbunim?” “Šta ako ne budem znala odgovor na pitanje?”itd. Što je više pitanja “Šta ako…?” povećava se doživljaj anksioznosti, odnosno, povećava se stepen pretnje koji vezujemo za situaciju o kojoj razmišljamo.\n\nZapišite sva vaša “Šta ako …?” pitanja.\n\nZa svako od njih, smislite scenario – način na koji biste reagovali ako biste se zbunili ili ne biste znali odgovor na pitanje (rečenice koje smo dali kao primer). Na ovaj način, napravićete i razraditi sebi strategije za sve potencijalne neprijatne situacijei osećaćete se sigurnije.\n\nUkoliko nemate scenario za određenu “Šta ako…?” situaciju, pokušajte da iskusite negativno osećanje – stida, sramote, tuge…, koje bi određena nepovoljna situacija nosila sa sobom.\n\nDoživite ova neprijatna osećanja kada ste kući, na sigurnom, pa ćete razumeti da čak i najgori scenario, nije baš takav kakvim su ga učinile vaše katastrofične misli.',
      recommendation: 'Vežba se radi dva dana po 15 minuta',
    },
    {
      id: 15,
      title: 'Maštajte o životu bez anksioznosti',
      description:
        'Razmislite u kojim sve aspektima života vas ograničava doživljaj anksioznosti. Zapišite..\n\nNa kraju, zatvorite oči i maštajte kako bi izgledao vaš život bez anksioznosti.',
      recommendation:
        'Dobro proučite vežbu, možete maštati o životu bez anksioznosti svaki dan, uveče pre spavanja',
    },
    {
      id: 16,
      title: 'Promenite odnos prema anksioznosti, ne budite žrtva',
      description:
        'Kada se borite protiv osećanja anksioznosti, povlačite se ili ste očajni jer se tako osećate, žalite se i pričate drugima o svom problemu, vi ste žrtva. Promenite taj odnos, pokušajte da se sprijateljite sa vašom anksioznšću.\n\nNajpre, razmislite kako bi osećaj anksioznosti mogao da izgleda, dajte mu neki oblik. Još bolje je ako nacrtate svoju anksioznost.\n\nPostavite crtež tako da ga možete gledati što češće.\n\nNeka vam lik sa crteža postane poznat i prijatan.\n\nDa li imate nešto da saopštite liku koji predstavlja anksioznost? Šta biste mu rekli, kada bi to bilo moguće?\n\nVaš doživljaj anksioznosti nekada je predstavljao vašu adaptaciju na određenu situaciju. Koristio vam je. Zato, pokušajte da se sprijateljite sa likom sa crteža...',
      recommendation: 'Radite vežbu tri puta nedeljno po 10 minuta',
    },
    {
      id: 17,
      title: 'Režirajte svoju epizodu anksioznosti',
      description:
        'Napravite film u svojoj glavi o jednoj vašoj uobičajenoj sceni anksioznosti. Postavite se u ulogu režisera i odlučite kog žanra će biti vaš film. Najbolje je da počnete sa komedijom.\n\nOdaberite jednu uobičajenu situaciju u kojoj se osećate anksiozno. Možda je to ulazak u prodavnicu ili izlazak na ulicu.\n\nAko ste odabrali komičan scenario, razmislite šta se dalje dešava u vašem filmu. Izašli ste na ulicu, vidite sebe kako se držite za zid ili ste seli jer vas je preplavio osećaj anksioznosti.\n\nUbacite elemente komedije. Da li vam prilaze drugi ljudi i zajedno sa vama sedaju pored zida? Zamislite grupu ljudi koja sedi na ulici, veselo priča i smeje se. Ako vam srce i dalje jako lupa, zamislite kako svi, zajedno, merite krvni pritisak i kako ste od toga napravili zabavu.\n\nŽelimo da vam pomognemo da svoj tipičan obrazac doživljaja anksioznosti izmenite.',
      recommendation: 'Radite vežbu dva puta nedeljno po 10 minuta',
    },
    {
      id: 18,
      title: 'Dodajte novo značenje ansioznosti',
      description:
        'Kada osetite uobičajene znakove anksioznosti – lupanje srca, pritiskanje u grudima, otežano disanje….sledeće što pomislite sigurno je: “nije mi dobro, kreće napad anksioznosti, srušiću se” Naravno, ovi fizički simptomi (lupanje srca, pritiskanje u grudima, otežano disanje) nisu toliko moćni da vas sruše; moćne su misli koje vezujete za njih i koje razvijate u svojoj glavi.\n\nRazmislite. Da li možete vašim simptomima dati neko drugo, novo značenje?\n\nŠta bi za vas još moglo da znači: lupanje srca, pritiskanje u grudima, otežano disanje?\n\nLjudi se osećaju anksiozno kada procenjuju svoj život i događaje u njemu, previše zahtevnim, odnosno, kada im nedostaje samopouzdanja. Dakle, lupanje srca, pritiskanje u grudima i otežano disanje, vas podsećaju da treba sebe da jačate i brinete o sebi.\n\nOd sada, svaki put kada osetite lupanje srca, pritiskanje u grudima i otežano disanje, kažite sebi: “aha, ovo je podsećanje da treba da brinem o sebi. Šta bih danas mogao da uradim za sebe?”',
      recommendation:
        'Dobro proučite vežbu. Radite na njoj jedan dan 20 minuta i primenite je svaki put kada kod vas krene osećaj anksioznosti.',
    },
    {
      id: 19,
      title: 'Razradite strategije za "Šta ako...?" situacije',
      description:
        'Tzv.katastrofične misli koje pokreću anksioznost, najčešće počinju sa “Šta ako…?” “Šta ako se zbunim?” “Šta ako ne budem znala odgovor na pitanje?”itd. Što je više pitanja “Šta ako…?” povećava se doživljaj anksioznosti, odnosno, povećava se stepen pretnje koji vezujemo za situaciju o kojoj razmišljamo.\n\nZapišite sva vaša “Šta ako …?” pitanja.\n\nZa svako od njih, smislite scenario – način na koji biste reagovali ako biste se zbunili ili ne biste znali odgovor na pitanje (rečenice koje smo dali kao primer). Na ovaj način, napravićete i razraditi sebi strategije za sve potencijalne neprijatne situacijei osećaćete se sigurnije.\n\nUkoliko nemate scenario za određenu “Šta ako…?” situaciju, pokušajte da iskusite negativno osećanje – stida, sramote, tuge…, koje bi određena nepovoljna situacija nosila sa sobom.\n\nDoživite ova neprijatna osećanja kada ste kući, na sigurnom, pa ćete razumeti da čak i najgori scenario, nije baš takav kakvim su ga učinile vaše katastrofične misli.',
      recommendation: 'Vežba se radi dva dana po 15 minuta',
    },
  ];
  const [searchText, setSearchText] = useState('');
  const displayContent = data.filter(item =>
    item.title.toLowerCase().startsWith(searchText.toLowerCase()),
  );

  useHeader(navigation);
  return (
    <SolidBackground
      isDark={true}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.header}>
        <SearchBar
          placeholder={'Vezbe za anksioznost'}
          setSearchText={setSearchText}
        />
      </View>
      <FadeAnimation>
        <FlatList
          data={displayContent}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}) => (
            <CustomButton
              isDark={false}
              text={item.title}
              onPress={() => console.log(item)}
            />
          )}
        />
      </FadeAnimation>
    </SolidBackground>
  );
};
