// lib/models/verse_detail.dart

class VerseDetailResponse {
  final bool success;
  final VerseDetailData data;

  VerseDetailResponse({required this.success, required this.data});

  factory VerseDetailResponse.fromJson(Map<String, dynamic> json) {
    return VerseDetailResponse(
      success: json['success'] ?? false,
      data: VerseDetailData.fromJson(json['data']),
    );
  }
}

class VerseDetailData {
  final SurahInfo surah;
  final VerseInfo verse;
  final List<TranslationInfo> translations;
  final List<AudioStreamInfo> audioStreams;
  final HistoricalContext historicalContext;

  VerseDetailData({
    required this.surah,
    required this.verse,
    required this.translations,
    required this.audioStreams,
    required this.historicalContext,
  });

  factory VerseDetailData.fromJson(Map<String, dynamic> json) {
    return VerseDetailData(
      surah: SurahInfo.fromJson(json['surah']),
      verse: VerseInfo.fromJson(json['verse']),
      translations: (json['translations'] as List)
          .map((t) => TranslationInfo.fromJson(t))
          .toList(),
      audioStreams: (json['audio_streams'] as List)
          .map((a) => AudioStreamInfo.fromJson(a))
          .toList(),
      historicalContext: HistoricalContext.fromJson(json['historical_context']),
    );
  }
}

class SurahInfo {
  final int id;
  final String nameLatin;
  final String nameArabic;
  final String revelationType;
  final int totalVerses;

  SurahInfo({
    required this.id,
    required this.nameLatin,
    required this.nameArabic,
    required this.revelationType,
    required this.totalVerses,
  });

  factory SurahInfo.fromJson(Map<String, dynamic> json) {
    return SurahInfo(
      id: json['id'],
      nameLatin: json['name_latin'],
      nameArabic: json['name_arabic'],
      revelationType: json['revelation_type'],
      totalVerses: json['total_verses'],
    );
  }
}

class VerseInfo {
  final int number;
  final int juz;
  final int page;
  final String textUthmani;
  final String textLatin;
  final String fontRecommended;

  VerseInfo({
    required this.number,
    required this.juz,
    required this.page,
    required this.textUthmani,
    required this.textLatin,
    required this.fontRecommended,
  });

  factory VerseInfo.fromJson(Map<String, dynamic> json) {
    return VerseInfo(
      number: json['number'],
      juz: json['juz'] ?? 1,
      page: json['page'] ?? 1,
      textUthmani: json['text_uthmani'] ?? '',
      textLatin: json['text_latin'] ?? '',
      fontRecommended: json['font_recommended'] ?? 'UthmanicHafs',
    );
  }
}

class TranslationInfo {
  final String language;
  final String source;
  final String text;
  final String? footnotes;

  TranslationInfo({
    required this.language,
    required this.source,
    required this.text,
    this.footnotes,
  });

  factory TranslationInfo.fromJson(Map<String, dynamic> json) {
    return TranslationInfo(
      language: json['language'] ?? 'id',
      source: json['source'] ?? '',
      text: json['text'] ?? '',
      footnotes: json['footnotes'],
    );
  }
}

class AudioStreamInfo {
  final String reciterId;
  final String reciterName;
  final String country;
  final String style;
  final String category;
  final String audioUrl;
  final String bitrate;

  AudioStreamInfo({
    required this.reciterId,
    required this.reciterName,
    required this.country,
    required this.style,
    required this.category,
    required this.audioUrl,
    required this.bitrate,
  });

  factory AudioStreamInfo.fromJson(Map<String, dynamic> json) {
    return AudioStreamInfo(
      reciterId: json['reciter_id'] ?? '',
      reciterName: json['reciter_name'] ?? '',
      country: json['country'] ?? '',
      style: json['style'] ?? 'Murattal',
      category: json['category'] ?? 'Internasional',
      audioUrl: json['audio_url'] ?? '',
      bitrate: json['bitrate'] ?? '128kbps',
    );
  }
}

class HistoricalContext {
  final bool hasHistoricalLink;
  final int totalLinks;
  final List<HistoricalLinkItem> links;

  HistoricalContext({
    required this.hasHistoricalLink,
    required this.totalLinks,
    required this.links,
  });

  factory HistoricalContext.fromJson(Map<String, dynamic> json) {
    return HistoricalContext(
      hasHistoricalLink: json['has_historical_link'] ?? false,
      totalLinks: json['total_links'] ?? 0,
      links: (json['links'] as List? ?? [])
          .map((l) => HistoricalLinkItem.fromJson(l))
          .toList(),
    );
  }
}

class HistoricalLinkItem {
  final String eventId;
  final String eventTitle;
  final String era;
  final String dateHijri;
  final String dateGregorian;
  final String linkType;
  final String contextExplanation;
  final List<String> keyFigures;
  final String authenticSource;

  HistoricalLinkItem({
    required this.eventId,
    required this.eventTitle,
    required this.era,
    required this.dateHijri,
    required this.dateGregorian,
    required this.linkType,
    required this.contextExplanation,
    required this.keyFigures,
    required this.authenticSource,
  });

  factory HistoricalLinkItem.fromJson(Map<String, dynamic> json) {
    return HistoricalLinkItem(
      eventId: json['event_id'] ?? '',
      eventTitle: json['event_title'] ?? '',
      era: json['era'] ?? '',
      dateHijri: json['date_hijri'] ?? '',
      dateGregorian: json['date_gregorian'] ?? '',
      linkType: json['link_type'] ?? '',
      contextExplanation: json['context_explanation'] ?? '',
      keyFigures: List<String>.from(json['key_figures'] ?? []),
      authenticSource: json['authentic_source'] ?? '',
    );
  }
}
