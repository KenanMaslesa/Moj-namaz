var _0x440e=['dark','color-white','onerror','#ikindija_v','indexOf','#zora_n','#ikindija_n','setItem','#date2','color','datum','vakat','#city','#date1','#jacija_n','#izlazak_v','substring','location','value','#jacija_v','#aksam_s','active-time','#aksam_n','#dark_theme','send','lokacija','dark-theme','hide','100px','setMinutes','light','status','background-black','#light-theme','font-size','#zora_v','3px\x20solid\x20rgb(24,\x20210,\x20110)','getElementById','EXPIRED','floor','setHours','#date','#podne_v','.vaktija-header','#aksam_v','#countdown','#ikindija_s','none','#ayat_prayer_time','responseText','#podne_s','click','#date-wrapper','#izlazak_n','getTime','#zora_s','#jacija_s','setDate','theme','countdown','html','removeClass','innerHTML','https://api.vaktija.ba/vaktija/v1/','css','GET','Greška\x20u\x20komunikaciji\x20sa\x20serverom','#vaktija','border-bottom','addClass','getItem','#izlazak_s','#podne_n','show','getDate'];(function(_0x30bd42,_0x440ea4){var _0x4779d9=function(_0x12ac10){while(--_0x12ac10){_0x30bd42['push'](_0x30bd42['shift']());}};_0x4779d9(++_0x440ea4);}(_0x440e,0x127));var _0x4779=function(_0x30bd42,_0x440ea4){_0x30bd42=_0x30bd42-0x0;var _0x4779d9=_0x440e[_0x30bd42];return _0x4779d9;};var _0xcdc47d=_0x4779,zora,izlazak_sunca,podne,ikindija,aksam,jacija,sati,minute,countDownDate=new Date();window['onload']=function(){var _0xf10da=_0x4779,_0x12ac10=localStorage[_0xf10da('0x0')](_0xf10da('0x3f'));if(_0x12ac10===_0xf10da('0x5'))DarkTheme();else LightTheme();if(localStorage['getItem'](_0xf10da('0x16'))===null)localStorage[_0xf10da('0xc')](_0xf10da('0x16'),0x4d);else var _0x5a73ad=localStorage[_0xf10da('0x0')](_0xf10da('0x16')),_0x3447cf=$('#locations\x20option[value='+_0x5a73ad+']')['prop']('selected',!![]);};function getPoziv(_0x1d71dd,_0x4edf09){var _0x2ff83d=_0x4779,_0x269d14=new XMLHttpRequest();_0x269d14['onload']=function(){var _0xf554c2=_0x4779;_0x269d14[_0xf554c2('0x24')]==0xc8?_0x1d71dd(JSON['parse'](_0x269d14[_0xf554c2('0x36')])):alert('Error\x20'+_0x269d14['statusText']);},_0x269d14[_0x2ff83d('0x7')]=function(){var _0x5b183c=_0x2ff83d;alert(_0x5b183c('0x47'));},_0x269d14['open'](_0x2ff83d('0x46'),_0x4edf09,!![]),_0x269d14[_0x2ff83d('0x1d')](null);}if(localStorage[_0xcdc47d('0x0')](_0xcdc47d('0x16'))==null)urlGetVaktija='https://api.vaktija.ba/vaktija/v1/77';else urlGetVaktija=_0xcdc47d('0x44')+localStorage[_0xcdc47d('0x0')](_0xcdc47d('0x16'));getPoziv(ucitajPodatke,urlGetVaktija);function ucitajPodatke(_0x4e4f61){var _0x589e8e=_0xcdc47d;zora=_0x4e4f61[_0x589e8e('0x10')][0x0],izlazak_sunca=_0x4e4f61[_0x589e8e('0x10')][0x1],podne=_0x4e4f61['vakat'][0x2],ikindija=_0x4e4f61['vakat'][0x3],aksam=_0x4e4f61[_0x589e8e('0x10')][0x4],jacija=_0x4e4f61[_0x589e8e('0x10')][0x5],$(_0x589e8e('0x3d'))[_0x589e8e('0x4a')]('active-time'),$(_0x589e8e('0x13'))[_0x589e8e('0x4a')](_0x589e8e('0x1a')),$(_0x589e8e('0x18'))[_0x589e8e('0x4a')](_0x589e8e('0x1a')),sati=zora[_0x589e8e('0x15')](0x0,zora[_0x589e8e('0x9')](':')),minute=zora[_0x589e8e('0x15')](zora['indexOf'](':')+0x1),countDownDate[_0x589e8e('0x2d')](sati),countDownDate[_0x589e8e('0x22')](minute),countDownDate['setSeconds'](0x0),$(_0x589e8e('0x11'))['html'](_0x4e4f61[_0x589e8e('0x1e')]),$(_0x589e8e('0x2e'))[_0x589e8e('0x41')](_0x4e4f61['datum'][0x1]+'\x20/\x20'+_0x4e4f61[_0x589e8e('0xf')][0x0]),$(_0x589e8e('0x12'))[_0x589e8e('0x41')](_0x4e4f61[_0x589e8e('0xf')][0x1]),$(_0x589e8e('0xd'))[_0x589e8e('0x41')](_0x4e4f61['datum'][0x0]),$(_0x589e8e('0x28'))[_0x589e8e('0x41')](zora),$('#izlazak_v')[_0x589e8e('0x41')](izlazak_sunca),$('#podne_v')['html'](podne),$('#ikindija_v')['html'](ikindija),$(_0x589e8e('0x31'))[_0x589e8e('0x41')](aksam),$(_0x589e8e('0x18'))['html'](jacija);}function setSati(_0x521240){var _0x5e24b2=_0xcdc47d;sati=_0x521240['substring'](0x0,_0x521240[_0x5e24b2('0x9')](':')),countDownDate[_0x5e24b2('0x2d')](sati);}function setMinute(_0x1ca7d7){var _0x4cec66=_0xcdc47d;minute=_0x1ca7d7[_0x4cec66('0x15')](_0x1ca7d7[_0x4cec66('0x9')](':')+0x1),countDownDate[_0x4cec66('0x22')](minute);}function setAll(_0x3608f4){var _0x46dfda=_0xcdc47d;_0x3608f4>=countDownDate['getTime']()&&(setSati(izlazak_sunca),setMinute(izlazak_sunca),$(_0x46dfda('0x3d'))[_0x46dfda('0x42')]('active-time'),$('#jacija_n')['removeClass']('active-time'),$(_0x46dfda('0x18'))[_0x46dfda('0x42')](_0x46dfda('0x1a')),$(_0x46dfda('0x3c'))[_0x46dfda('0x4a')](_0x46dfda('0x1a')),$(_0x46dfda('0xa'))[_0x46dfda('0x4a')](_0x46dfda('0x1a')),$('#zora_v')[_0x46dfda('0x4a')]('active-time')),_0x3608f4>=countDownDate[_0x46dfda('0x3b')]()&&(setSati(podne),setMinute(podne),$(_0x46dfda('0x3c'))[_0x46dfda('0x42')]('active-time'),$('#zora_n')['removeClass'](_0x46dfda('0x1a')),$('#zora_v')[_0x46dfda('0x42')]('active-time'),$(_0x46dfda('0x1'))[_0x46dfda('0x4a')](_0x46dfda('0x1a')),$(_0x46dfda('0x3a'))[_0x46dfda('0x4a')](_0x46dfda('0x1a')),$(_0x46dfda('0x14'))['addClass'](_0x46dfda('0x1a'))),_0x3608f4>=countDownDate[_0x46dfda('0x3b')]()&&(setSati(ikindija),setMinute(ikindija),$(_0x46dfda('0x1'))['removeClass'](_0x46dfda('0x1a')),$(_0x46dfda('0x3a'))['removeClass'](_0x46dfda('0x1a')),$('#izlazak_v')[_0x46dfda('0x42')](_0x46dfda('0x1a')),$(_0x46dfda('0x37'))[_0x46dfda('0x4a')](_0x46dfda('0x1a')),$(_0x46dfda('0x2'))[_0x46dfda('0x4a')](_0x46dfda('0x1a')),$(_0x46dfda('0x2f'))[_0x46dfda('0x4a')]('active-time')),_0x3608f4>=countDownDate[_0x46dfda('0x3b')]()&&(setSati(aksam),setMinute(aksam),$(_0x46dfda('0x37'))[_0x46dfda('0x42')]('active-time'),$(_0x46dfda('0x2'))[_0x46dfda('0x42')](_0x46dfda('0x1a')),$(_0x46dfda('0x2f'))['removeClass']('active-time'),$(_0x46dfda('0x33'))[_0x46dfda('0x4a')]('active-time'),$(_0x46dfda('0xb'))[_0x46dfda('0x4a')]('active-time'),$(_0x46dfda('0x8'))['addClass']('active-time')),_0x3608f4>=countDownDate[_0x46dfda('0x3b')]()&&(setSati(jacija),setMinute(jacija),$(_0x46dfda('0x33'))[_0x46dfda('0x42')](_0x46dfda('0x1a')),$(_0x46dfda('0xb'))[_0x46dfda('0x42')](_0x46dfda('0x1a')),$(_0x46dfda('0x8'))['removeClass'](_0x46dfda('0x1a')),$('#aksam_s')[_0x46dfda('0x4a')](_0x46dfda('0x1a')),$(_0x46dfda('0x1b'))[_0x46dfda('0x4a')](_0x46dfda('0x1a')),$(_0x46dfda('0x31'))[_0x46dfda('0x4a')](_0x46dfda('0x1a'))),_0x3608f4>=countDownDate[_0x46dfda('0x3b')]()&&($(_0x46dfda('0x19'))[_0x46dfda('0x42')](_0x46dfda('0x1a')),$(_0x46dfda('0x1b'))[_0x46dfda('0x42')]('active-time'),$('#aksam_v')[_0x46dfda('0x42')](_0x46dfda('0x1a')),$('#jacija_s')['addClass'](_0x46dfda('0x1a')),$(_0x46dfda('0x13'))[_0x46dfda('0x4a')]('active-time'),$(_0x46dfda('0x18'))[_0x46dfda('0x4a')](_0x46dfda('0x1a')),countDownDate[_0x46dfda('0x3e')](countDownDate[_0x46dfda('0x4')]()+0x1),setSati(zora),setMinute(zora));}function getTime(_0x42f6d9){return _0x42f6d9<0xa?'0'+_0x42f6d9:_0x42f6d9;}var x=setInterval(function(){var _0x4ed8d2=_0xcdc47d,_0x5193c0=new Date();_0x5193c0=_0x5193c0[_0x4ed8d2('0x3b')]();if(_0x5193c0>=countDownDate)setAll(_0x5193c0);var _0x123a5f=countDownDate-_0x5193c0,_0x38658e=Math[_0x4ed8d2('0x2c')](_0x123a5f%(0x3e8*0x3c*0x3c*0x18)/(0x3e8*0x3c*0x3c)),_0x20539c=Math['floor'](_0x123a5f%(0x3e8*0x3c*0x3c)/(0x3e8*0x3c)),_0x9bff7=Math[_0x4ed8d2('0x2c')](_0x123a5f%(0x3e8*0x3c)/0x3e8);_0x38658e==0x0&&_0x20539c<=0xa&&_0x9bff7==0x0&&($(_0x4ed8d2('0x32'))[_0x4ed8d2('0x45')](_0x4ed8d2('0xe'),'red'),$('#countdown')[_0x4ed8d2('0x45')](_0x4ed8d2('0x27'),_0x4ed8d2('0x21'))),document['getElementById']('countdown')[_0x4ed8d2('0x43')]=getTime(_0x38658e)+':'+getTime(_0x20539c)+':'+getTime(_0x9bff7),_0x123a5f<0x0&&(clearInterval(x),document[_0x4ed8d2('0x2a')](_0x4ed8d2('0x40'))[_0x4ed8d2('0x43')]=_0x4ed8d2('0x2b'));},0x3e8);function GetLocation(_0x5af755){var _0x2c3388=_0xcdc47d,_0x51e1cb=_0x5af755[_0x2c3388('0x17')];localStorage[_0x2c3388('0xc')](_0x2c3388('0x16'),_0x51e1cb),getPoziv(ucitajPodatke,_0x2c3388('0x44')+_0x51e1cb);}function DarkTheme(){var _0x2adc0e=_0xcdc47d;$(_0x2adc0e('0x1c'))[_0x2adc0e('0x20')](),$(_0x2adc0e('0x26'))[_0x2adc0e('0x3')](),$(_0x2adc0e('0x48'))[_0x2adc0e('0x4a')](_0x2adc0e('0x25')),$('#vaktija')['addClass']('dark-theme'),$(_0x2adc0e('0x35'))[_0x2adc0e('0x4a')](_0x2adc0e('0x6')),$(_0x2adc0e('0x39'))[_0x2adc0e('0x4a')](_0x2adc0e('0x6')),$('#countdown')[_0x2adc0e('0x4a')]('color-white'),$('#city')[_0x2adc0e('0x4a')](_0x2adc0e('0x6')),$(_0x2adc0e('0x30'))[_0x2adc0e('0x45')](_0x2adc0e('0x49'),_0x2adc0e('0x29'));}function LightTheme(){var _0x156ce5=_0xcdc47d;$(_0x156ce5('0x26'))[_0x156ce5('0x20')](),$(_0x156ce5('0x1c'))[_0x156ce5('0x3')](),$(_0x156ce5('0x48'))[_0x156ce5('0x42')]('background-black'),$(_0x156ce5('0x48'))[_0x156ce5('0x42')](_0x156ce5('0x1f')),$(_0x156ce5('0x35'))[_0x156ce5('0x42')](_0x156ce5('0x6')),$(_0x156ce5('0x39'))[_0x156ce5('0x42')](_0x156ce5('0x6')),$(_0x156ce5('0x32'))['removeClass']('color-white'),$('#city')[_0x156ce5('0x42')]('color-white'),$('.vaktija-header')[_0x156ce5('0x45')](_0x156ce5('0x49'),_0x156ce5('0x34'));}$(_0xcdc47d('0x1c'))['on'](_0xcdc47d('0x38'),function(){var _0x85f3da=_0xcdc47d;localStorage['setItem']('theme',_0x85f3da('0x5')),DarkTheme();}),$(_0xcdc47d('0x26'))['on'](_0xcdc47d('0x38'),function(){var _0x4dc121=_0xcdc47d;localStorage[_0x4dc121('0xc')](_0x4dc121('0x3f'),_0x4dc121('0x23')),LightTheme();});