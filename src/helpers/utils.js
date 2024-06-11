export function getNotesPlainTextFromBlocks(blocks) {
  let header = '';
  let body = '';
  if (blocks?.length > 0) {
    if (blocks[0].type === 'header') {
      header = blocks[0].data.text;
    } else {
      body = blocks[0].data.text;
    }
  }
  if (!body && blocks?.length > 1) {
    body = blocks[1].data.text;
  }
  return {
    header,
    body,
  };
}
