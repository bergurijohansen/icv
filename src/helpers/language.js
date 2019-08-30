import React, { useContext } from 'react'
import Android from '@material-ui/icons/Android'
import Web from '@material-ui/icons/Web'
import Context from '../context/context'

const Language = (section, word) => {
    const [state] = useContext(Context)
    const wordList = {
        fo: {
            personal: {
                name: 'Bergur I. Johansen',
                age: 31,
                street: 'Reynsgøta 11',
                city: 'Argir',
                country: 'Faroe Islands',
                mobilelink: '00298259934',
                moblie: '+298 25 99 34',
                email: 'bergurij@gmail.com',
                github: 'https://github.com/bergurijohansen',
                facebook: '',
                instagram: '',
                linkedin: '',
                aboutMe: 'Um meg',
                aboutMeDetails:
                    'Eg eiti Bergur I. Johansen, eri 31 ár og undir útbúgving. Eg lesið KT-Verkfrøði á Fróðskaparsetri Føroya. Í verandi løtu búgvi eg á Argjum saman við mínari damu og 2 ára gomlu dóttur. Vit eru í gongd við at byggja okkum heim á Norðskála.',
                experience: [
                    {
                        title: 'Prógv',
                        description: 'Skúlar og skeiðir',
                        values: [
                            { year: '1995 - 2005', description: 'Argjaskúli' },
                            {
                                year: '2005 - 2008',
                                description: 'HTX á Tekniska Studentarskúla í Klaksvík',
                            },
                            {
                                year: '2016 - 2019',
                                description: 'KT-Verkfrøði á Fróðskaparsetur Føroya',
                            },
                        ],
                    },
                    {
                        title: 'Arbeiði',
                        description: 'Arbeiðs royndir',
                        values: [
                            {
                                year: '2006 - 2008',
                                description:
                                    'Arbeidi lestrarstarv hjá Kósini meðan eg gekk í skúla.',
                            },
                            { year: '2007', description: 'Barrvørður á Hotel Føroyum' },
                            {
                                year: '2008 - 2016',
                                description:
                                    'Arbeidi hjá VestSalmon sum seinri varð keypt av Bakkafrosti.',
                            },
                            { year: '2018 -', description: 'Lestrar starv hjá TechCare' },
                        ],
                    },
                    {
                        title: 'Eyka',
                        description: 'Loyvisbrøv v.m.',
                        values: [
                            { year: null, description: 'Koyrikort B' },
                            { year: null, description: 'Trukk loyvi' },
                        ],
                    },
                ],
            },
            words: {
                it: 'KT'
            },
            privateProjects: [
                {
                    name: 'iCV',
                    details:
                        'iCV er eitt privat project sum eg fór ígongd við fyri at venja meg við React og Material UI. CV er ein síða har tú kann síggja mínar førleikar og kunning um meg. Her kann tú millum annað finna onnur projectir sum eg havi gjørt í mínari frítíð.',
                    link: 'https://github.com/bergurijohansen/icv',
                },
                {
                    name: 'Text Flag',
                    details:
                        'Set ein tekst inn í formin, ella uploada ein .pdf fíl og vel hvat fyri flags skulu verða tá tú kannar tekstin fyri typo villir. \n\n Hetta programmi gjørdi eg so at eg á ein skjótan og lættan hátt kundi fáa mína bachelor uppgávu rættaða fyri dupult orð, ov nógv millumrúm og aðrar líknandi villur.',
                    link: null,
                },
            ],
            schoolProjects: [
                {
                    name: 'Flappy Bird',
                    details:
                        'Lorem ipsum ... bla bla skldjf j jskldfj lksdjf ief iosdjsdijfoi jijoijfio jiajdsfj asdfj iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj hhogsadoif iosdjojidoisjfio asjdiofjsdiofj jfjeiofj4ijj jaosdij eijeoij oasidj iijf iosjiosdjf jiobla',
                    link: null,
                },
                {
                    name: 'Dino',
                    details:
                        'Lorem ipsum ... bla bla skldjf j jskldfj lksdjf ief iosdjsdijfoi jijoijfio jiajdsfj asdfj iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj hhogsadoif iosdjojidoisjfio asjdiofjsdiofj jfjeiofj4ijj jaosdij eijeoij oasidj iijf iosjiosdjf jiobla',
                    link: null,
                },
                {
                    name: 'Game Engine',
                    details:
                        'Lorem ipsum ... bla bla skldjf j jskldfj lksdjf ief iosdjsdijfoi jijoijfio jiajdsfj asdfj hhogsadoif iosdjojidoisjfio asjdiofjsdiofj jfjeiofj4ijj jaosdij eijeoij oasidj iijf iosjiosdjf jiobla iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj',
                    link: 'https://github.com/bergurijohansen/LudumGameEngine',
                },
            ],
            courses: [
                {
                    avatar: <Android />,
                    label: 'Android',
                },
                {
                    avatar: 'A',
                    label: 'Algorithm',
                },
                {
                    avatar: 'C#',
                    label: 'ASP.NET MVC',
                },
                {
                    avatar: 'C++',
                    label: 'Objekt-grundað forritan',
                },
                {
                    avatar: 'C++',
                    label: 'Objektrættað forritan',
                },
                {
                    avatar: 'C++',
                    label: 'Design Patterns',
                },
                {
                    avatar: 'DB',
                    label: 'Databasur og SQL',
                },
                {
                    avatar: 'DS',
                    label: 'Descrete Støddfrøði',
                },
                {
                    avatar: 'F',
                    label: 'Fíggjarstýring',
                },
                {
                    avatar: <Web />,
                    label: 'Innleiðing í Web skipanir',
                },
                {
                    avatar: 'J',
                    label: 'Java',
                },
                {
                    avatar: 'K',
                    label: 'KT-Trygd',
                },
                {
                    avatar: 'KT',
                    label: 'KT-Verkøtlan',
                },
                {
                    avatar: 'L',
                    label: 'Lineer algebra',
                },
                {
                    avatar: 'R',
                    label: 'Dátuvísindi og hagfrøði við RStudio',
                },
                {
                    avatar: 'S',
                    label: 'Stýriskipanir',
                },
            ],
            // aboutMe: 'Eg eiti Bergur I. Johansen, eri 31 ár og undir útbúgving. Eg lesið KT-Verkfrøði á Fróðskaparsetri Føroya. Í verandi løtu búgvi eg á Argjum saman við mínari damu og 2 ára gomlu dóttur. Vit eru í gongd við at byggja okkum heim á Norðskála.',

        },
        dk: {
            personal: {
                name: 'Bergur I. Johansen',
                age: 31,
                street: 'Reynsgøta 11',
                city: 'Argir',
                country: 'Færøerne',
                mobilelink: '00298259934',
                moblie: '+298 25 99 34',
                email: 'bergurij@gmail.com',
                github: 'https://github.com/bergurijohansen',
                facebook: '',
                instagram: '',
                linkedin: '',
                aboutMe: 'Om mig',
                aboutMeDetails:
                    'Mit navn er Bergur, jeg bor i Argir på færøerne. Jeg studerer IT på universited her på Færøerne.',
                experience: [
                    {
                        title: 'Prógv',
                        description: 'Skúlar og skeiðir',
                        values: [
                            { year: '1995 - 2005', description: 'Argjaskúli' },
                            {
                                year: '2005 - 2008',
                                description: 'HTX á Tekniska Studentarskúla í Klaksvík',
                            },
                            {
                                year: '2016 - 2019',
                                description: 'KT-Verkfrøði á Fróðskaparsetur Føroya',
                            },
                        ],
                    },
                    {
                        title: 'Arbeiði',
                        description: 'Arbeiðs royndir',
                        values: [
                            {
                                year: '2006 - 2008',
                                description:
                                    'Arbeidi lestrarstarv hjá Kósini meðan eg gekk í skúla.',
                            },
                            { year: '2007', description: 'Barrvørður á Hotel Føroyum' },
                            {
                                year: '2008 - 2016',
                                description:
                                    'Arbeidi hjá VestSalmon sum seinri varð keypt av Bakkafrosti.',
                            },
                            { year: '2018 -', description: 'Lestrar starv hjá TechCare' },
                        ],
                    },
                    {
                        title: 'Eyka',
                        description: 'Loyvisbrøv v.m.',
                        values: [
                            { year: null, description: 'Koyrikort B' },
                            { year: null, description: 'Trukk loyvi' },
                        ],
                    },
                ],
            },
            words: {
                it: 'IT'
            },
            privateProjects: [
                {
                    name: 'iCV',
                    details:
                        'iCV er eitt privat project sum eg fór ígongd við fyri at venja meg við React og Material UI. CV er ein síða har tú kann síggja mínar førleikar og kunning um meg. Her kann tú millum annað finna onnur projectir sum eg havi gjørt í mínari frítíð.',
                    link: 'https://github.com/bergurijohansen/icv',
                },
                {
                    name: 'Text Flag',
                    details:
                        'Set ein tekst inn í formin, ella uploada ein .pdf fíl og vel hvat fyri flags skulu verða tá tú kannar tekstin fyri typo villir. \n\n Hetta programmi gjørdi eg so at eg á ein skjótan og lættan hátt kundi fáa mína bachelor uppgávu rættaða fyri dupult orð, ov nógv millumrúm og aðrar líknandi villur.',
                    link: null,
                },
            ],
            schoolProjects: [
                {
                    name: 'Flappy Bird',
                    details:
                        'Lorem ipsum ... bla bla skldjf j jskldfj lksdjf ief iosdjsdijfoi jijoijfio jiajdsfj asdfj iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj hhogsadoif iosdjojidoisjfio asjdiofjsdiofj jfjeiofj4ijj jaosdij eijeoij oasidj iijf iosjiosdjf jiobla',
                    link: null,
                },
                {
                    name: 'Dino',
                    details:
                        'Lorem ipsum ... bla bla skldjf j jskldfj lksdjf ief iosdjsdijfoi jijoijfio jiajdsfj asdfj iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj hhogsadoif iosdjojidoisjfio asjdiofjsdiofj jfjeiofj4ijj jaosdij eijeoij oasidj iijf iosjiosdjf jiobla',
                    link: null,
                },
                {
                    name: 'Game Engine',
                    details:
                        'Lorem ipsum ... bla bla skldjf j jskldfj lksdjf ief iosdjsdijfoi jijoijfio jiajdsfj asdfj hhogsadoif iosdjojidoisjfio asjdiofjsdiofj jfjeiofj4ijj jaosdij eijeoij oasidj iijf iosjiosdjf jiobla iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj',
                    link: 'https://github.com/bergurijohansen/LudumGameEngine',
                },
            ],
            courses: [
                {
                    avatar: <Android />,
                    label: 'Android',
                },
                {
                    avatar: 'A',
                    label: 'Algorithm',
                },
                {
                    avatar: 'C#',
                    label: 'ASP.NET MVC',
                },
                {
                    avatar: 'C++',
                    label: 'Objekt-grundað forritan',
                },
                {
                    avatar: 'C++',
                    label: 'Objektrættað forritan',
                },
                {
                    avatar: 'C++',
                    label: 'Design Patterns',
                },
                {
                    avatar: 'DB',
                    label: 'Databasur og SQL',
                },
                {
                    avatar: 'DS',
                    label: 'Descrete Støddfrøði',
                },
                {
                    avatar: 'F',
                    label: 'Fíggjarstýring',
                },
                {
                    avatar: <Web />,
                    label: 'Innleiðing í Web skipanir',
                },
                {
                    avatar: 'J',
                    label: 'Java',
                },
                {
                    avatar: 'K',
                    label: 'KT-Trygd',
                },
                {
                    avatar: 'KT',
                    label: 'KT-Verkøtlan',
                },
                {
                    avatar: 'L',
                    label: 'Lineer algebra',
                },
                {
                    avatar: 'R',
                    label: 'Dátuvísindi og hagfrøði við RStudio',
                },
                {
                    avatar: 'S',
                    label: 'Stýriskipanir',
                },
            ],
        }
    }

    return wordList[state.locals][section][word] || word
}

export default Language