export const sampleGuides = [
  {
    id: 1,
    query: 'How do I import audio from a URL?',
    steps: [
      {
        id: 'step1',
        attachTo: { element: '#file', on: 'bottom' },
        text: 'Open the File menu'
      },
      {
        id: 'step2',
        attachTo: { element: '#import', on: 'right' },
        text: 'Click on Import'
      },
      {
        id: 'step3',
        attachTo: { element: '#import-audio', on: 'right' },
        text: 'Select Audio'
      },
      {
        id: 'step4',
        attachTo: { element: '#import-audio-url', on: 'right' },
        text: 'Choose From URL'
      }
    ]
  },
  {
    id: 2,
    query: 'How can I export my project for YouTube?',
    steps: [
      {
        id: 'step1',
        attachTo: { element: '#file', on: 'bottom' },
        text: 'Open the File menu'
      },
      {
        id: 'step2',
        attachTo: { element: '#export', on: 'right' },
        text: 'Click on Export'
      },
      {
        id: 'step3',
        attachTo: { element: '#export-advanced', on: 'right' },
        text: 'Select Advanced'
      },
      {
        id: 'step4',
        attachTo: { element: '#export-presets', on: 'right' },
        text: 'Choose Presets'
      },
      {
        id: 'step5',
        attachTo: { element: '#export-youtube', on: 'right' },
        text: 'Select YouTube'
      }
    ]
  },
  {
    id: 3,
    query: 'How do I access the color correction tools?',
    steps: [
      {
        id: 'step1',
        attachTo: { element: '#tools', on: 'bottom' },
        text: 'Open the Tools menu'
      },
      {
        id: 'step2',
        attachTo: { element: '#color-tools', on: 'right' },
        text: 'Click on Color Tools'
      },
      {
        id: 'step3',
        attachTo: { element: '#color-wheels', on: 'right' },
        text: 'Select Color Wheels for precise color adjustments'
      }
    ]
  },
  {
    id: 4,
    query: 'How can I view the system information for troubleshooting?',
    steps: [
      {
        id: 'step1',
        attachTo: { element: '#help', on: 'bottom' },
        text: 'Open the Help menu'
      },
      {
        id: 'step2',
        attachTo: { element: '#support', on: 'right' },
        text: 'Click on Support'
      },
      {
        id: 'step3',
        attachTo: { element: '#diagnostics', on: 'right' },
        text: 'Select Diagnostics'
      },
      {
        id: 'step4',
        attachTo: { element: '#system-info', on: 'right' },
        text: 'Choose System Info to view detailed system information'
      }
    ]
  },
  {
    id: 5,
    query: 'How do I import images from Unsplash?',
    steps: [
      {
        id: 'step1',
        attachTo: { element: '#file', on: 'bottom' },
        text: 'Open the File menu'
      },
      {
        id: 'step2',
        attachTo: { element: '#import', on: 'right' },
        text: 'Click on Import'
      },
      {
        id: 'step3',
        attachTo: { element: '#import-images', on: 'right' },
        text: 'Select Images'
      },
      {
        id: 'step4',
        attachTo: { element: '#import-images-stock', on: 'right' },
        text: 'Choose From Stock'
      },
      {
        id: 'step5',
        attachTo: { element: '#import-images-unsplash', on: 'right' },
        text: 'Select Unsplash to import images from their library'
      }
    ]
  }
];
