const initialState = {
  startedQuiz: false,
  questions: {
    money: [
      {id: 1, text: "Is anyone chasing you for money?", statement: "Someone is chasing you for money"},
      {id: 2, text: "Do you have payments due or unpaid accounts? E.g. phone / Work and Income / Cash converters / power bills / car loan / gyms", statement: "You have payments due or unpaid accounts"},
      {id: 3, text: "Have you recently had any problems with a product or item you’ve bought?", statement: "You have a problem with a product you’ve bought"},
      {id: 4, text: "Have you recently had any problems with a service you’ve bought?", statement: "You have had a problem with a service you’ve bought"},
      {id: 5, text: "Do you have any unpaid fines?", statement: "You have unpaid fines"}
    ],
    housing: [
      {id: 6, text: "Have you recently received an eviction notice?", statement: "You have recently been given an eviction notice"},
      {id: 7, text: "Was your tenancy bond lodged and/or returned?", statement: "Your bond has not been lodged or returned"},
      {id: 8, text: "Have you been able to pick up all your belongings?", statement: "You have not been able to pick up all your belongings"},
      {id: 9, text: "Do you have any unpaid rent?", statement: "You have unpaid rent"},
      {id: 10, text: "Do you have any problems with your landlord or flatmates?", statement: "You have problems with your landlord or flatmates"},
      {id: 11, text: "Do you have any problems with your neighbours?", statement: "You have problems with your neighbours"},
      {id: 12, text: "Are you or do you want to apply for government or community housing?", statement: "You would like to apply for government or community housing"}
    ],
    court: [
      {id: 13, text: "Do you have a Notice to Appear, or are you due in Court?", statement: "You have a Notice to Appear, or are due in Court"},
      {id: 14, text: "Have you or a family member had contact with the police you would like to discuss?", statement: "You’d like to discuss contact you or a family member has had with the police"}
    ],
    workAndIncome: [
      {id: 15, text: "Are you receiving the appropriate Work and Income benefits?", statement: "You are having problems with Work and Income"},
      {id: 16, text: "Would you like to change or review any of these arrangements?", statement: "You would like to review or change your Work and Income benefits"}
    ],
    relationships: [
      {preface: "Would you like to discuss ..."},
      {id: 17, text: "The safety of yourself or your children?", statement: "You have concerns about the safety of yourself and or your children"},
      {id: 18, text: "Arrangements, plans or orders about children? (e.g. who the child/ren live with, spend time with, or your involvement in major long-term issues)", statement: "You would like to discuss arrangements, plans or orders about children in your life"},
      {id: 19, text: "Any concerns about Child Youth and Family and your whānau?", statement: "You have concerns about  CYFS (Oranga Tamariki) and your whānau"},
      {id: 20, text: "Your rights in any personal relationship, including divorce or separation?", statement: "You want to know about your rights in any personal relationship, including divorce or separation"},
      {id: 21, text: "Concerns about your experiences as a child, while you were in the care of adults or institutions?", statement: "You have concerns about your experiences as a child, while you were in the care of adults or institutions"}
    ],
    employment: [
      {id: 22, text: "Are you having any problems at work?", statement: "You are having problems at work"},
      {id: 23, text: "Are you worried about getting fired, laid off, or having your hours cut?", statement: "You are worried about losing your job or having your hours cut"},
      {id: 24, text: "Does your employer owe you money?", statement: "Your employee owes you money"},
      {id: 25, text: "Do you feel like you have been treated unfairly due to your gender, ethnicity, religion etc.?", statement: "You are being discriminated against"}
    ],
    other: [
      {id: 26, text: "Do you have concerns around your immigration status in New Zealand?", statement: "You have concerns about your immigration status in NZ"},
      {id: 27, text: "Are you having trouble bringing family members to New Zealand?", statement: "You are having trouble bringing family members to NZ"},
      {id: 28, text: "Are you worried about how your child is being treated at school?", statement: "You are worried about how your child is being treated at school "}
    ]
  },
  results: {
    money: [],
    housing:[],
    court: [],
    workAndIncome: [],
    relationships: [],
    employment: [],
    other: []
  }
}

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    default:
      return state
  }
}

export default reducer
