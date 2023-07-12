function fixScaping(string) {
  let fixedString = string;
  fixedString = fixedString.replaceAll('&#039;', "'");
  fixedString = fixedString.replaceAll('&ouml;', 'ö');
  fixedString = fixedString.replaceAll('&quot;', '"');
  fixedString = fixedString.replaceAll('&rsquo;', "'");
  fixedString = fixedString.replaceAll('&oacute;', 'ó');
  fixedString = fixedString.replaceAll('&Oacute;', 'Ó');
  fixedString = fixedString.replaceAll('&Aacute;', 'Á');
  fixedString = fixedString.replaceAll('&aacute;', 'á');
  fixedString = fixedString.replaceAll('&Eacute;', 'É');
  fixedString = fixedString.replaceAll('&eacute;', 'é');
  fixedString = fixedString.replaceAll('&Iacute;', 'í');
  fixedString = fixedString.replaceAll('&iacute;', 'Í');
  fixedString = fixedString.replaceAll('&Oacute;', 'Ó');
  fixedString = fixedString.replaceAll('&oacute;', 'ó');
  fixedString = fixedString.replaceAll('&Uacute;', 'Ú');
  fixedString = fixedString.replaceAll('&uacute;', 'ú');
  fixedString = fixedString.replaceAll('&Ouml;', 'Ö');
  fixedString = fixedString.replaceAll('&Delta;', 'Δ');
  fixedString = fixedString.replaceAll('&amp;', '&');
  fixedString = fixedString.replaceAll('&ldquo;', '“');
  fixedString = fixedString.replaceAll('&rdquo;', '”');
  fixedString = fixedString.replaceAll('&ograve;', 'ò');
  fixedString = fixedString.replaceAll('&Ograve;', 'Ò');
  fixedString = fixedString.replaceAll('&agrave;', 'à');
  fixedString = fixedString.replaceAll('&Agrave;', 'À');
  fixedString = fixedString.replaceAll('&Egrave;', 'È');
  fixedString = fixedString.replaceAll('&egrave;', 'é');
  fixedString = fixedString.replaceAll('&Igrave;', 'Ì');
  fixedString = fixedString.replaceAll('&igrave;', 'ì');
  fixedString = fixedString.replaceAll('&Ugrave;', 'Ù');
  fixedString = fixedString.replaceAll('&ugrave;', 'ù');
  fixedString = fixedString.replaceAll('&Auml', 'Ä');
  fixedString = fixedString.replaceAll('&auml', 'ä');
  fixedString = fixedString.replaceAll('&Euml', 'Ë');
  fixedString = fixedString.replaceAll('&euml', 'ë');
  fixedString = fixedString.replaceAll('&Iuml', 'Ï');
  fixedString = fixedString.replaceAll('&iuml', 'ï');
  fixedString = fixedString.replaceAll('&Ouml', 'Ö');
  fixedString = fixedString.replaceAll('&ouml', 'ö');
  fixedString = fixedString.replaceAll('&Uuml', 'Ü');
  fixedString = fixedString.replaceAll('&uuml', 'ü');
  fixedString = fixedString.replaceAll('&Atilde', 'Ã');
  fixedString = fixedString.replaceAll('&atilde', 'ã');
  fixedString = fixedString.replaceAll('&Ntilde', 'Ñ');
  fixedString = fixedString.replaceAll('&ntilde', 'ñ');
  fixedString = fixedString.replaceAll('&Otilde', 'Õ');
  fixedString = fixedString.replaceAll('&otilde', 'õ');
  fixedString = fixedString.replaceAll('&lrm', '');
  fixedString = fixedString.replaceAll('&hellip', '...');

  return fixedString;
}

function addAnswers(response) {
  return response.map((item) => {
    item.question = fixScaping(item.question);
    item.correct_answer = fixScaping(item.correct_answer);
    item.incorrect_answers = item.incorrect_answers.map((item) => fixScaping(item));
    if (item.type === 'multiple') {
      return {
        ...item,
        answers: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5)
      };
    } else {
      return { ...item, answers: ['True', 'False'] };
    }
  });
}

export default addAnswers;
