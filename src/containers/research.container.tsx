import { Dispatch, SetStateAction, useState } from "react";
import ResearchCard from "../components/cards/research_card.component";
import SearchBar from "../components/search_bar.component";
import FilterContainer from "./filter.container";

const data = [
  {
    id: "32",
    title:
      "Analysis of clinical characteristics of severe novel coronavirus pneumonia (COVID-19)",
    sponsor: "Wuhan Jinyintan Hospital (Wuhan Infectious Diseases Hospital)",
  },
  {
    id: "33",
    title:
      "Clinical Application of ECMO in the Treatment of Patients with Very Serious Respiratory Failure due to novel Coronavirus Pneumonia (COVID-19)",
    sponsor: "Wuhan Jinyintan Hospital (Wuhan Infectious Diseases Hospital)",
  },
  {
    id: "31",
    title:
      "Immunomodulatory Therapy for Severe Novel Coronavirus Pneumonia (COVID-19)",
    sponsor: "Wuhan Jinyintan Hospital (Wuhan Infectious Diseases Hospital)",
  },
  {
    id: "881",
    title:
      "The comprehensive evaluation of therapeutic drugs for pediatric novel coronavirus pneumonia (COVID-19)",
    sponsor: "Children's Hospital of Fudan University",
  },
  {
    id: "3241",
    title: "Methylprednisolone in COVID-19 Patients (Methyl19LGH)",
    sponsor: "Lahore General Hospital",
  },
  {
    id: "13882",
    title:
      "A comparative study of the effectiveness between pulse regimen methylprednisolone versus high dose dexamethasone as the initial treatment of moderate Covid-19 pneumonia: An open-label randomized controlled trial",
    sponsor: "Faculty of Medicine Ramathibodi Hospital",
  },
  {
    id: "518",
    title:
      "Efficacy and optimization of antiviral therapy for novel coronavirus pneumonia (COVID-19) patients",
    sponsor:
      "Diagnosis, treatment and Research Center for infectious diseases, the fifth medical center of the PLA",
  },
  {
    id: "479",
    title:
      "Cancelled by the investigator                 Clinical guidance of diagnose and treatment for novel coronavirus pneumonia (COVID-19) based on ''Shi-Du-Yi''",
    sponsor:
      "The Second Affiliated Hospital of Guizhou University of traditional Chinese Medicine",
  },
  {
    id: "72",
    title:
      "Chinese medicine prevention and treatment program for novel coronavirus pneumonia (COVID-19): a perspective, sing-arm trial",
    sponsor: "Zhejiang Chinese Medical University",
  },
  {
    id: "81",
    title:
      "Chinese medicine prevention and treatment program for suspected novel coronavirus pneumonia (COVID-19): a perspective, double-blind, placebo, randomised controlled trial",
    sponsor: "Zhejiang Chinese Medical University",
  },
  {
    id: "1101",
    title:
      "Comprehensive mental and physical health assessment and intervention studies for novel coronavirus pneumonia (COVID-19) patients",
    sponsor: "Wuhan Jinyintan Hospital (Wuhan Infectious Diseases Hospital)",
  },
  {
    id: "200",
    title:
      "Identification and Clinical Treatment of Severe novel coronavirus pneumonia (COVID-19) Patients",
    sponsor: "Xinyang Central Hospital",
  },
  {
    id: "375",
    title:
      "A prospective cohort  study for comprehensive treatment of Chinese medicine in the treatment of convalescent patients of novel coronavirus pneumonia (COVID-19)",
    sponsor: "Hubei Provincial Hospital of TCM",
  },
  {
    id: "684",
    title:
      "A retrospective study for evolution and clinical outcomes study of novel coronavirus pneumonia (COVID-19) patients",
    sponsor:
      "Tongji Hospital, Tongji Medical College, Huazhong University of Science and Technology",
  },
  {
    id: "205",
    title:
      "Clinical observation and research plan of novel coronavirus pneumonia (COVID-19) patients",
    sponsor: "Shanghai Public Health Clinical Center",
  },
  {
    id: "87",
    title:
      "A Randomized Controlled Trial for Integrated Traditional Chinese Medicine and Western Medicine in the Treatment of Common Type Novel Coronavirus Pneumonia (COVID-19)",
    sponsor:
      "1. Xinhua affiliated hospital, Hubei University of Chinese Medicine; 2. Hubei Provincial Hospital of Integrated Chinese and Western Medicine",
  },
  {
    id: "27",
    title:
      "Clinical Trial for Integrated Chinese and Western Medicine in the Treatment of Children with Novel Coronavirus Pneumonia (COVID-19)",
    sponsor: "Children's Hospital of Fudan University",
  },
  {
    id: "4768",
    title:
      "A follow-up study about clinically diagnosed cases of novel coronavirus pneumonia (COVID-19)",
    sponsor: "The First Affiliated Hospital of Zhengzhou University",
  },
  {
    id: "155",
    title:
      "Optimization Protocal of Integrated Traditional Chinese and Western Medicine in the Treatment for Novel Coronavirus Pneumonia (COVID-19)",
    sponsor: "Hospital of Chengdu University of Traditional Chinese Medicine",
  },
  {
    id: "7046",
    title: "Exercise training and COVID-19: a randomized controlled trial",
    sponsor: "Allameh Tabataba’i University",
  },
  {
    id: "2412",
    title:
      "A Gamified Network for Surgical Education During COVID-19: A Randomized Controlled Trial",
    sponsor: "Université de Montréal",
  },
  {
    id: "1977",
    title: "Proactive Care of Ambulatory COVID19 Patients",
    sponsor: "Centre Hospitalier Universitaire, Amiens",
  },
  {
    id: "3132",
    title:
      "Randomised controlled trial of an app-based intervention, Anchored, to support the mental health of Australians recently unemployed due to COVID-19.",
    sponsor: "UNSW",
  },
  {
    id: "7006",
    title:
      "Effect of a Brief Psychological Intervention on Anxiety and Depression During COVID-19",
    sponsor: "UNSW Sydney",
  },
  {
    id: "1850",
    title: "A Randomized Trial of Anticoagulation Strategies in COVID-19",
    sponsor: "NYU Langone Health",
  },
  {
    id: "9788",
    title: "FREEDOM COVID-19 Anticoagulation Strategy",
    sponsor: "Valentin Fuster",
  },
];

interface Props {
  setrunExample: Dispatch<SetStateAction<boolean>>;
  runExample: boolean;
}

const ResearchContainer = (props: Props) => {
  const { setrunExample, runExample } = props;

  const [filterComponent, setfilterComponent] = useState(false);

  return (
    <>
      {/* SEARCH BAR */}
      <SearchBar
        setrunExample={setrunExample}
        setfilterState={setfilterComponent}
        filterState={filterComponent}
      />

      {/* RESEARCH CARDS */}
      {runExample && (
        <div className="flex-col overflow-y-auto">
          {data.map((item) => (
            <ResearchCard
              title={item.sponsor + " - " + item.id}
              content={item.title}
            />
          ))}
        </div>
      )}

      {filterComponent ? (
        <div className="absolute ml-1">
          <FilterContainer
            setfilterState={setfilterComponent}
            filterState={filterComponent}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ResearchContainer;
