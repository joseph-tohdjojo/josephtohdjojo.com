const underConstructionSrv = function() {
  this.views = []

  const views = [
    {
      name: 'about',
      btnText: 'WHO I AM',
      inDevelopment: false,
    },
    {
      name: 'devwork',
      btnText: 'CODE WORK',
      inDevelopment: false,
    },
    {
      name: 'designwork',
      btnText: 'DESIGN WORK',
      inDevelopment: false,
    },
    {
      name: 'skills',
      btnText: 'WHAT I KNOW',
      inDevelopment: false,
    },
    {
      name: 'contact',
      btnText: 'WHERE TO FIND ME',
      inDevelopment: false,
    },
  ]

  for (let i = 0; i < views.length; i++) {
    if (!views[i].inDevelopment) {
      this.views.push(views[i])
    }
  }
}

export default underConstructionSrv
