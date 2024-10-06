export const navbar = [
  {
    id: 'file',
    label: 'File',
    description: 'Contains file-related operations',
    subItems: [
      { id: 'new-project', label: 'New Project', description: 'Create a new project' },
      { id: 'open-project', label: 'Open Project', description: 'Open an existing project' },
      { id: 'save', label: 'Save', description: 'Save the current project' },
      { id: 'save-as', label: 'Save As', description: 'Save the project with a new name' },
      {
        id: 'export',
        label: 'Export',
        description: 'Export the project in various formats',
        subItems: [
          { id: 'export-video', label: 'Video', description: 'Export as video' },
          { id: 'export-audio', label: 'Audio', description: 'Export as audio' },
          { id: 'export-image', label: 'Image', description: 'Export as image' },
          {
            id: 'export-advanced',
            label: 'Advanced',
            description: 'Advanced export options',
            subItems: [
              { id: 'export-custom-format', label: 'Custom Format', description: 'Export in a custom format' },
              { id: 'export-batch', label: 'Batch Export', description: 'Export multiple files at once' },
              {
                id: 'export-presets',
                label: 'Presets',
                description: 'Export using predefined presets',
                subItems: [
                  { id: 'export-youtube', label: 'YouTube', description: 'Export for YouTube' },
                  { id: 'export-vimeo', label: 'Vimeo', description: 'Export for Vimeo' },
                  { id: 'export-instagram', label: 'Instagram', description: 'Export for Instagram' },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'import',
        label: 'Import',
        description: 'Import various types of media',
        subItems: [
          { 
            id: 'import-video',
            label: 'Video',
            description: 'Import video from different sources',
            subItems: [
              { id: 'import-video-file', label: 'From File', description: 'Import video from a local file' },
              { id: 'import-video-url', label: 'From URL', description: 'Import video from a URL' },
              { id: 'import-video-camera', label: 'From Camera', description: 'Import video from a connected camera' },
              {
                id: 'import-video-cloud',
                label: 'From Cloud',
                description: 'Import video from cloud storage',
                subItems: [
                  { id: 'import-video-gdrive', label: 'Google Drive', description: 'Import from Google Drive' },
                  { id: 'import-video-dropbox', label: 'Dropbox', description: 'Import from Dropbox' },
                  { id: 'import-video-onedrive', label: 'OneDrive', description: 'Import from OneDrive' }
                ]
              }
            ]
          },
          { 
            id: 'import-audio',
            label: 'Audio',
            description: 'Import audio from different sources',
            subItems: [
              { id: 'import-audio-file', label: 'From File', description: 'Import audio from a local file' },
              { id: 'import-audio-microphone', label: 'From Microphone', description: 'Import audio from a microphone' },
              { id: 'import-audio-url', label: 'From URL', description: 'Import audio from a URL' },
              {
                id: 'import-audio-library',
                label: 'From Library',
                description: 'Import audio from the library',
                subItems: [
                  { id: 'import-audio-sound-effects', label: 'Sound Effects', description: 'Import sound effects' },
                  { id: 'import-audio-music', label: 'Music', description: 'Import music' },
                  { id: 'import-audio-voiceovers', label: 'Voiceovers', description: 'Import voiceovers' }
                ]
              }
            ]
          },
          {
            id: 'import-images',
            label: 'Images',
            description: 'Import images from different sources',
            subItems: [
              { id: 'import-images-file', label: 'From File', description: 'Import images from a local file' },
              { id: 'import-images-url', label: 'From URL', description: 'Import images from a URL' },
              {
                id: 'import-images-stock',
                label: 'From Stock',
                description: 'Import images from stock libraries',
                subItems: [
                  { id: 'import-images-unsplash', label: 'Unsplash', description: 'Import from Unsplash' },
                  { id: 'import-images-pexels', label: 'Pexels', description: 'Import from Pexels' },
                  { id: 'import-images-pixabay', label: 'Pixabay', description: 'Import from Pixabay' }
                ]
              }
            ]
          },
        ],
      },
      { id: 'project-settings', label: 'Project Settings', description: 'Adjust project settings' },
      { id: 'exit', label: 'Exit', description: 'Exit the application' },
    ],
  },
  {
    id: 'edit',
    label: 'Edit',
    description: 'Edit-related operations',
    subItems: [
      { id: 'undo', label: 'Undo', description: 'Undo the last action' },
      { id: 'redo', label: 'Redo', description: 'Redo the last undone action' },
      { id: 'cut', label: 'Cut', description: 'Cut the selected content' },
      { id: 'copy', label: 'Copy', description: 'Copy the selected content' },
      { id: 'paste', label: 'Paste', description: 'Paste the copied content' },
      {
        id: 'advanced-edit',
        label: 'Advanced',
        description: 'Advanced editing options',
        subItems: [
          { id: 'paste-attributes', label: 'Paste Attributes', description: 'Paste only the attributes of copied content' },
          { id: 'duplicate', label: 'Duplicate', description: 'Create a duplicate of the selected content' },
          { id: 'delete-ripple', label: 'Delete and Ripple', description: 'Delete selected content and close the gap' },
          {
            id: 'time-edit',
            label: 'Time',
            description: 'Time-related editing options',
            subItems: [
              { id: 'speed-duration', label: 'Speed/Duration', description: 'Adjust speed or duration of selected content' },
              { id: 'freeze-frame', label: 'Freeze Frame', description: 'Create a freeze frame from the current frame' },
              { id: 'add-edit', label: 'Add Edit', description: 'Add an edit point at the current position' },
            ]
          }
        ]
      },
      { id: 'select-all', label: 'Select All', description: 'Select all content' },
      { id: 'deselect-all', label: 'Deselect All', description: 'Deselect all content' },
    ],
  },
  {
    id: 'view',
    label: 'View',
    description: 'View-related operations',
    subItems: [
      { id: 'zoom-in', label: 'Zoom In', description: 'Zoom in on the content' },
      { id: 'zoom-out', label: 'Zoom Out', description: 'Zoom out from the content' },
      { id: 'fit-to-screen', label: 'Fit to Screen', description: 'Fit the content to the screen' },
      {
        id: 'panels',
        label: 'Panels',
        description: 'Toggle visibility of different panels',
        subItems: [
          { id: 'timeline', label: 'Timeline', description: 'Show the timeline panel' },
          { id: 'effects', label: 'Effects', description: 'Show the effects panel' },
          { id: 'audio-mixer', label: 'Audio Mixer', description: 'Show the audio mixer panel' },
          {
            id: 'advanced-panels',
            label: 'Advanced Panels',
            description: 'Show advanced panels',
            subItems: [
              { id: 'scopes', label: 'Scopes', description: 'Show the scopes panel' },
              { id: 'metadata', label: 'Metadata', description: 'Show the metadata panel' },
              { id: 'markers', label: 'Markers', description: 'Show the markers panel' }
            ]
          }
        ]
      },
      { id: 'full-screen', label: 'Full Screen', description: 'Toggle full screen mode' },
      {
        id: 'workspace',
        label: 'Workspace',
        description: 'Switch between different workspace layouts',
        subItems: [
          { id: 'default', label: 'Default', description: 'Switch to the default workspace layout' },
          { id: 'audio-editing', label: 'Audio Editing', description: 'Switch to the audio editing workspace layout' },
          { id: 'color-correction', label: 'Color Correction', description: 'Switch to the color correction workspace layout' },
          { id: 'effects', label: 'Effects', description: 'Switch to the effects workspace layout' },
          { id: 'save-layout', label: 'Save Current Layout', description: 'Save the current workspace layout' }
        ]
      }
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    description: 'Various tools for editing',
    subItems: [
      { id: 'selection-tool', label: 'Selection Tool', description: 'Select content' },
      { id: 'trim-tool', label: 'Trim Tool', description: 'Trim content' },
      { id: 'razor-tool', label: 'Razor Tool', description: 'Split content' },
      { id: 'slip-tool', label: 'Slip Tool', description: 'Move content without affecting the duration' },
      { id: 'pen-tool', label: 'Pen Tool', description: 'Draw and select content' },
      {
        id: 'audio-tools',
        label: 'Audio Tools',
        description: 'Tools for audio editing',
        subItems: [
          { id: 'audio-gain', label: 'Audio Gain', description: 'Adjust audio gain' },
          { id: 'voice-changer', label: 'Voice Changer', description: 'Change the voice of the audio' },
          { id: 'noise-reduction', label: 'Noise Reduction', description: 'Reduce noise in the audio' },
          {
            id: 'advanced-audio',
            label: 'Advanced Audio',
            description: 'Advanced audio editing tools',
            subItems: [
              { id: 'spectral-display', label: 'Spectral Display', description: 'Display audio in the frequency domain' },
              { id: 'pitch-correction', label: 'Pitch Correction', description: 'Correct the pitch of the audio' },
              { id: 'time-stretch', label: 'Time Stretch', description: 'Stretch or compress the duration of the audio' }
            ]
          }
        ]
      },
      {
        id: 'color-tools',
        label: 'Color Tools',
        description: 'Tools for color editing',
        subItems: [
          { id: 'color-wheels', label: 'Color Wheels', description: 'Adjust colors using color wheels' },
          { id: 'curves', label: 'Curves', description: 'Adjust colors using curves' },
          { id: 'vectorscope', label: 'Vectorscope', description: 'Display color vectors' },
          {
            id: 'luts',
            label: 'LUTs',
            description: 'Lookup tables for color correction',
            subItems: [
              { id: 'import-lut', label: 'Import LUT', description: 'Import a lookup table' },
              { id: 'manage-luts', label: 'Manage LUTs', description: 'Manage lookup tables' },
              { id: 'create-lut', label: 'Create LUT', description: 'Create a lookup table' }
            ]
          }
        ]
      }
    ],
  },
  {
    id: 'effects',
    label: 'Effects',
    description: 'Various effects for content',
    subItems: [
      {
        id: 'video-effects',
        label: 'Video Effects',
        description: 'Effects for video',
        subItems: [
          { id: 'color-correction', label: 'Color Correction', description: 'Adjust colors of the video' },
          { id: 'transitions', label: 'Transitions', description: 'Add transitions between video clips' },
          { id: 'filters', label: 'Filters', description: 'Apply filters to the video' },
          {
            id: 'generators',
            label: 'Generators',
            description: 'Generate content',
            subItems: [
              { id: 'titles', label: 'Titles', description: 'Generate titles' },
              { id: 'backgrounds', label: 'Backgrounds', description: 'Generate backgrounds' },
              { id: 'shapes', label: 'Shapes', description: 'Generate shapes' }
            ]
          },
          {
            id: 'distort',
            label: 'Distort',
            description: 'Distort the video',
            subItems: [
              { id: 'warp', label: 'Warp', description: 'Warp the video' },
              { id: 'lens-correction', label: 'Lens Correction', description: 'Correct lens distortion' },
              { id: 'perspective', label: 'Perspective', description: 'Adjust perspective' }
            ]
          }
        ],
      },
      {
        id: 'audio-effects',
        label: 'Audio Effects',
        description: 'Effects for audio',
        subItems: [
          { id: 'equalizer', label: 'Equalizer', description: 'Adjust audio frequencies' },
          { id: 'compression', label: 'Compression', description: 'Compress the dynamic range of the audio' },
          { id: 'reverb', label: 'Reverb', description: 'Add reverb to the audio' },
          {
            id: 'restoration',
            label: 'Restoration',
            description: 'Restore audio',
            subItems: [
              { id: 'denoiser', label: 'Denoiser', description: 'Remove noise from the audio' },
              { id: 'declicker', label: 'Declicker', description: 'Remove clicks from the audio' },
              { id: 'dehummer', label: 'Dehummer', description: 'Remove hum from the audio' }
            ]
          },
          {
            id: 'modulation',
            label: 'Modulation',
            description: 'Modulate the audio',
            subItems: [
              { id: 'chorus', label: 'Chorus', description: 'Add chorus effect to the audio' },
              { id: 'flanger', label: 'Flanger', description: 'Add flanger effect to the audio' },
              { id: 'phaser', label: 'Phaser', description: 'Add phaser effect to the audio' }
            ]
          }
        ],
      },
      { id: 'effect-controls', label: 'Effect Controls', description: 'Control the effects' },
      { id: 'add-to-favorites', label: 'Add to Favorites', description: 'Add the current effect to favorites' },
    ],
  },
  {
    id: 'help',
    label: 'Help',
    description: 'Help and support',
    subItems: [
      { id: 'tutorials', label: 'Tutorials', description: 'Learn how to use the application' },
      { id: 'keyboard-shortcuts', label: 'Keyboard Shortcuts', description: 'View keyboard shortcuts' },
      { id: 'online-documentation', label: 'Online Documentation', description: 'View online documentation' },
      {
        id: 'support',
        label: 'Support',
        description: 'Get support',
        subItems: [
          { id: 'faq', label: 'FAQ', description: 'View frequently asked questions' },
          { id: 'community-forums', label: 'Community Forums', description: 'Join community forums' },
          { id: 'submit-ticket', label: 'Submit a Ticket', description: 'Submit a support ticket' },
          {
            id: 'diagnostics',
            label: 'Diagnostics',
            description: 'Diagnostics tools',
            subItems: [
              { id: 'system-info', label: 'System Info', description: 'View system information' },
              { id: 'error-logs', label: 'Error Logs', description: 'View error logs' },
              { id: 'performance-test', label: 'Performance Test', description: 'Run a performance test' }
            ]
          }
        ]
      },
      { id: 'check-for-updates', label: 'Check for Updates', description: 'Check for updates' },
      { id: 'about', label: 'About', description: 'View information about the application' },
    ],
  },
];