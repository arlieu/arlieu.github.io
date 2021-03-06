var nodes = new vis.DataSet([
  {
    id: 1,
    group: 'avery',
    label: '       Avery Lieu        '
  }, {
    id: 2,
    group: 'about',
    label: '          About          ',
    url: 'secondPage'
  }, {
    id: 3,
    group: 'workExperience',
    label: '    Work Experience    ',
    url: 'thirdPage'
  }, {
    id: 4,
    group: 'projects',
    label: '        Projects         ',
    url: 'fourthPage'
  }, {
    id: 5,
    group: 'skills',
    label: ' Skills & Certificates ',
    url: 'fifthPage'
  }, {
    id: 6,
    group: 'education',
    label: '        Education        ',
    url: 'sixthPage'
  }, {
    id: 7,
    group: 'contact',
    label: '         Contact         ',
    url: 'seventhPage'
  }, {
    id: 8,
    group: 'resume',
    label: '         Resume          ',
    url: 'lastPage'
  }
]);

// create an array with edges
var edges = new vis.DataSet([
  {
    from: 1,
    to: 2,
    length: 300,
    width: 2,
    color: {
      color: 'black',
      hover: 'rgba(0, 0, 0, 0.4)'
    },
    hoverWidth: 0.5
  }, {
    from: 1,
    to: 3,
    length: 300,
    width: 2,
    color: {
      color: 'black',
      hover: 'rgba(0, 0, 0, 0.4)'
    },
    hoverWidth: 0.5
  }, {
    from: 1,
    to: 4,
    length: 300,
    width: 2,
    color: {
      color: 'black',
      hover: 'rgba(0, 0, 0, 0.4)'
    },
    hoverWidth: 0.5
  }, {
    from: 1,
    to: 5,
    length: 300,
    width: 2,
    color: {
      color: 'black',
      hover: 'rgba(0, 0, 0, 0.4'
    },
    hoverWidth: 0.5
  }, {
    from: 1,
    to: 6,
    length: 300,
    width: 2,
    color: {
      color: 'black',
      hover: 'rgba(0, 0, 0, 0.4)'
    },
    hoverWidth: 0.5
  }, {
    from: 1,
    to: 7,
    length: 300,
    width: 2,
    color: {
      color: 'black',
      hover: 'rgba(0, 0, 0, 0.4)'
    },
    hoverWidth: 0.5
  }, {
    from: 1,
    to: 8,
    length: 300,
    width: 2,
    color: {
      color: 'black',
      hover: 'rgba(0, 0, 0, 0.4)'
    },
    hoverWidth: 0.5
  }
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  groups: {
    avery: {
      color: {
        background: 'rgba(255,255,255, 1)',
        hover: {
          border: 'rgba(255,255,255, 1)',
          background: 'rgba(255,255,255, 1)'
        },
        highlight: {
          background: 'rgba(255,255,255, 1)'
        }
      },
      borderWidth: 0,
      borderWidthSelected: 0,
      scaling: {
        label: {
          enabled: true,
          min: 300,
          max: 500
        },
        min: 400,
        max: 600
      },
      shape: 'circle',
      font: {
        size: 24
      }
    },
    about: {
      color: {
        background: '#ec1b5a',
        hover: {
          border: 'rgba(236, 27, 90, 0.6)',
          background: 'rgba(236, 27, 90, 0.6)'
        }
      },
      borderWidth: 0,
      scaling: {
        label: {
          enabled: true,
          min: 48,
          max: 100
        },
        min: 100,
        max: 300
      },
      shape: 'circle',
      font: {
        color: 'white'
      }
    },
    workExperience: {
      color: {
        background: '#79aefe',
        hover: {
          border: 'rgba(121, 174, 254, 0.6)',
          background: 'rgba(121, 174, 254, 0.6)'
        }
      },
      borderWidth: 0,
      scaling: {
        label: {
          enabled: true,
          min: 48,
          max: 100
        },
        min: 100,
        max: 300
      },
      shape: 'circle',
      font: {
        color: 'white'
      }
    },
    projects: {
      color: {
        background: '#314190',
        hover: {
          border: 'rgba(49, 65, 144, 0.6)',
          background: 'rgba(49, 65, 144, 0.6)'
        }
      },
      borderWidth: 0,
      scaling: {
        label: {
          enabled: true,
          min: 48,
          max: 100
        },
        min: 100,
        max: 300
      },
      shape: 'circle',
      font: {
        color: 'white'
      }
    },
    skills: {
      color: {
        background: '#279636',
        hover: {
          border: 'rgba(39, 150, 54, 0.6)',
          background: 'rgba(39, 150, 54, 0.6)'
        }
      },
      borderWidth: 0,
      scaling: {
        label: {
          enabled: true,
          min: 48,
          max: 100
        },
        min: 100,
        max: 300
      },
      shape: 'circle',
      font: {
        color: 'white'
      }
    },
    education: {
      color: {
        background: '#7d5d81',
        hover: {
          border: 'rgba(125, 93, 129, 0.6)',
          background: 'rgba(125, 93, 129, 0.6)'
        }
      },
      borderWidth: 0,
      scaling: {
        label: {
          enabled: true,
          min: 48,
          max: 100
        },
        min: 100,
        max: 300
      },
      shape: 'circle',
      font: {
        color: 'white'
      }
    },
    contact: {
      color: {
        background: '#ead24c',
        hover: {
          border: 'rgba(234, 210, 76, 0.6)',
          background: 'rgba(234, 210, 76, 0.6)'
        }
      },
      borderWidth: 0,
      scaling: {
        label: {
          enabled: true,
          min: 48,
          max: 100
        },
        min: 100,
        max: 300
      },
      shape: 'circle',
      font: {
        color: 'white'
      }
    },
    resume: {
      color: {
        background: '#2d2366',
        hover: {
          border: 'rgba(45, 35, 102, 0.6)',
          background: 'rgba(45, 35, 102, 0.6)'
        }
      },
      borderWidth: 0,
      scaling: {
        label: {
          enabled: true,
          min: 48,
          max: 100
        },
        min: 100,
        max: 300
      },
      shape: 'circle',
      font: {
        color: 'white'
      }
    }
  },
  interaction: {
    hover: true
  },
  autoResize: true,
  height: '100%',
  width: '100%',
  locale: 'en',
  clickToUse: true
};

// initialize your network!
var network = new vis.Network(container, data, options);

network.on("selectNode", function (params) {
  if (params.nodes.length === 1) {
    var node = nodes.get(params.nodes[0]);
    if (node.url.length > 0) {
      // window.open(node.url, '_blank');
      if (node.url == "secondPage") {
        $.fn.fullpage.moveTo('secondPage');
      }
      else if (node.url == "thirdPage") {
        $.fn.fullpage.moveTo('thirdPage');
      }
      else if (node.url == "fourthPage") {
        $.fn.fullpage.moveTo('fourthPage');
      }
      else if (node.url == "fifthPage") {
        $.fn.fullpage.moveTo('fifthPage');
      }
      else if (node.url == "sixthPage") {
        $.fn.fullpage.moveTo('sixthPage');
      }
      else if (node.url == "seventhPage") {
        $.fn.fullpage.moveTo('seventhPage');
      }
      else if (node.url == "lastPage") {
        $.fn.fullpage.moveTo('lastPage');
      }
    }
  }
});
