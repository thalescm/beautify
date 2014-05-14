PSD["AjustesGray"].visible = true;
PSD["AjustesPink"].visible = false;

PSD["AgendarPink"].visible = true;
PSD["AgendarGray"].visible = false;

PSD["HistoricoPink"].visible = false;
PSD["HistoricoGray"].visible = true;

// PSD["List scroll"].visible = true;

PSD["AjustesGray"].on("click", function(ev) {

  PSD["AjustesGray"].visible = false;
  PSD["AjustesPink"].visible = true;

  PSD["AgendarPink"].visible = false;
  PSD["AgendarGray"].visible = true;

  PSD["HistoricoPink"].visible = false;
  PSD["HistoricoGray"].visible = true;

  // PSD["List scroll"].visible = false;
});

PSD["AgendarGray"].on("click", function(ev) {

  PSD["AjustesGray"].visible = true;
  PSD["AjustesPink"].visible = false;

  PSD["AgendarPink"].visible = true;
  PSD["AgendarGray"].visible = false;

  PSD["HistoricoPink"].visible = false;
  PSD["HistoricoGray"].visible = true;

  // PSD["List scroll"].visible = true;
});

PSD["HistoricoGray"].on("click", function(ev) {

  PSD["AjustesGray"].visible = true;
  PSD["AjustesPink"].visible = false;

  PSD["AgendarPink"].visible = false;
  PSD["AgendarGray"].visible = true;

  PSD["HistoricoPink"].visible = true;
  PSD["HistoricoGray"].visible = false;

  // PSD["List scroll"].visible = false;
});