declare module '@apiverve/urltomarkdown' {
  export interface urltomarkdownOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface urltomarkdownResponse {
    status: string;
    error: string | null;
    data: URLtoMarkdownData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface URLtoMarkdownData {
      url:        null | string;
      title:      null | string;
      markdown:   null | string;
      wordCount:  number | null;
      imageCount: number | null;
      linkCount:  number | null;
  }

  export default class urltomarkdownWrapper {
    constructor(options: urltomarkdownOptions);

    execute(callback: (error: any, data: urltomarkdownResponse | null) => void): Promise<urltomarkdownResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: urltomarkdownResponse | null) => void): Promise<urltomarkdownResponse>;
    execute(query?: Record<string, any>): Promise<urltomarkdownResponse>;
  }
}
