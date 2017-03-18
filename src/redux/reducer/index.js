const initialState = {
  questions: {
    money: [
      {id: 1, text: "Is anyone chasing you for money?"},
      {id: 2, text: "Do you have payments due or unpaid accounts? E.g. phone / Work and Income / Cash converters / power bills / car loan / gyms"},
      {id: 3, text: "Have you recently had any problems with a product or item you’ve bought?"},
      {id: 4, text: "Have you recently had any problems with a service you’ve bought?"},
      {id: 5, text: "Do you have any unpaid fines?"}
    ],
    housing: [
      {id: 1, text: "Have you recently received an eviction notice?"},
      {id: 2, text: "Was your tenancy bond lodged and/or returned?"},
      {id: 3, text: "Have you been able to pick up all your belongings?"},
      {id: 4, text: "Do you have any unpaid rent?"},
      {id: 5, text: "Do you have any problems with your landlord or flatmates?"},
      {id: 6, text: "Do you have any problems with your neighbours?"},
      {id: 7, text: "Are you or do you want to apply for government or community housing?"}
    ],
    court: [
      {id: 1, text: "Do you have a Notice to Appear, or are you due in Court?"},
      {id: 2, text: "Have you or a family member had contact with the police you would like to discuss?"}
    ],
    workAndIncome: [
      {id: 1, text: "Are you receiving the appropriate Work and Income benefits?"},
      {id: 2, text: "Would you like to change or review any of these arrangements?"}
    ],
    relationships: [
      {id: 1, text: "The safety of yourself or your children?"},
      {id: 2, text: "Arrangements, plans or orders about children? (e.g. who the child/ren live with, spend time with, or your involvement in major long-term issues)"},
      {id: 3, text: "Any concerns about Child Youth and Family and your whānau?"},
      {id: 4, text: "Your rights in any personal relationship, including divorce or separation?"},
      {id: 5, text: "Concerns about your experiences as a child, while you were in the care of adults or institutions?"}
    ],
    employment: [
      {id: 1, text: "Are you having any problems at work?"},
      {id: 2, text: "Are you worried about getting fired, laid off, or having your hours cut?"},
      {id: 3, text: "Does your employer owe you money?"},
      {id: 4, text: "Do you feel like you have been treated unfairly due to your gender, ethnicity, religion etc.?"}
    ],
    other: [
      {id: 1, text: "Do you have concerns around your immigration status in New Zealand?"},
      {id: 2, text: "Are you having trouble bringing family members to New Zealand?"},
      {id: 2, text: "Are you worried about how your child is being treated at school?"}
    ]
  },
  results: [

  ]
}

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    default:
      return state
  }
}

export default reducer
